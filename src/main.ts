import { Contract, CallData, RawArgs, num, Call, MultiType } from "starknet";
import { MY_WALLETS } from "./config";
import { OpInfo } from "./types";
import { loadAccounts, loadProvider, processError, sleep } from "./utils";

// import { nostraInfo } from "./opInfo/nostra";
import { ethTransfer } from "./opInfo/eth-transfer";

async function run(
  info: OpInfo,
  opNames: string[],
  targetTxPerAccount: number = 1
): Promise<void> {
  const { network, ops } = info;
  console.log("OpInfo:", network);

  const provider = loadProvider(network, false);
  console.log("provider: ", provider.nodeUrl);
  const accounts = await loadAccounts(MY_WALLETS, provider);

  // record init nonces
  const initNonces: bigint[] = await Promise.all(
    accounts.map(async (account) => {
      const nonce = num.toBigInt(await account.getNonce());
      return nonce;
    })
  );
  console.log("initNonces:", initNonces);
  console.log(
    "accounts:",
    accounts.map((account) => account.address)
  );

  let txCount = 0;

  while (txCount < targetTxPerAccount * MY_WALLETS.length) {
    await Promise.all(
      accounts.map(async (account, accountIndex) => {
        if (!ops) {
          throw new Error("ops is undefined");
        }
        if (ops.length == 1) {
          const op = ops[0];
          const contractInstance = new Contract(op.abi, op.address, provider);
          contractInstance.connect(account);
          return Promise.all(
            ops.map(async (op, opIndex) => {
              const opName = opNames[opIndex] ?? Object.keys(op.calldatas)[0];
              const calldata = CallData.compile(
                op.calldatas[opName] as RawArgs
              );
              try {
                const response = await contractInstance.invoke(
                  opName,
                  calldata,
                  {
                    parseRequest: false,
                    nonce: initNonces[accountIndex],
                  }
                );
                console.log(
                  `${MY_WALLETS[accountIndex]}: ${response.transaction_hash}`
                );
                txCount++;
                initNonces[accountIndex]++;
                await sleep(5 * 1000); // 5 seconds per tx
              } catch (error: any) {
                const errorCode = processError(error);
                console.log("code:", errorCode, error);
                if (errorCode == "63") {
                  console.warn("Error 63, sleeping for 60 seconds");
                  await sleep(60 * 1000);
                } else if (error == "40") {
                  console.warn("Error 400, add nonce");
                  initNonces[accountIndex] = num.toBigInt(
                    await account.getNonce()
                  );
                }
              }
            })
          );
        } else {
          try {
            const calls = ops.map((op, opIndex) => {
              const rawCalldata = (
                op.calldatas[opNames[opIndex]] as MultiType[]
              ).map((item) => (item === "MY_ACCOUNT" ? account.address : item));

              const calldata = CallData.compile(rawCalldata);
              return {
                contractAddress: op.address,
                calldata,
              } as Call;
            });
            console.log("calls", calls);
            const res = await account.execute(calls);
            console.log("res", res.transaction_hash);
            txCount++;
          } catch (error) {
            const errorCode = processError(error as Error);
            console.log("code:", errorCode, error);
            if (errorCode == "-1") {
              throw error;
            } else if (errorCode == "63") {
              console.warn("Error 63, sleeping for 60 seconds");
              await sleep(60 * 1000);
            } else if (error == "40") {
              console.warn("Error 400, add nonce");
              initNonces[accountIndex] = num.toBigInt(await account.getNonce());
            }
          }
        }
      })
    );
  }
}

run(ethTransfer, ["transfer"], 1).catch((err) =>
  console.error("Error in run:", err)
);
