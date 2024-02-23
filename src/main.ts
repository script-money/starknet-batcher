import { Contract, CallData, RawArgs, num, Call, MultiType } from "starknet";
import { OpInfo } from "./types";
import { loadAccounts, loadProvider, processError, sleep } from "./utils";

/**
 * Executes operations on Starknet based on the operation information.
 *
 * @param info - Operation information including network, abi and operations list.
 * @param opNames - Names of the operation functions to be executed.
 * @param wallets - Wallet files to perform operations from.
 * @param password - Optional password for the wallets, set undefined to input manually.
 * @param targetTxPerAccount - Target number of transactions per account. Default is 1.
 */
export async function run(
  info: OpInfo,
  opNames: string[],
  wallets: string[],
  password?: string,
  targetTxPerAccount: number = 1
): Promise<void> {
  const { network, ops } = info;
  const provider = loadProvider(network, false);
  const accounts = await loadAccounts(wallets, provider, password);

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

  while (txCount < targetTxPerAccount * wallets.length) {
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
                  `${wallets[accountIndex]}: ${response.transaction_hash}`
                );
                txCount++;
                initNonces[accountIndex]++;
                await sleep(5 * 1000); // 5 seconds per tx
              } catch (error: any) {
                const errorCode = processError(error);
                console.log("code [1 ops]:", errorCode, error);
                if (errorCode == "63") {
                  console.warn("Error 63, sleeping for 60 seconds");
                  await sleep(60 * 1000);
                } else if (errorCode == "40") {
                  throw error.message;
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
            console.log("code [multiple ops]:", errorCode, error);
            if (errorCode == "-1") {
              throw error;
            } else if (errorCode == "63") {
              console.warn("Error 63, sleeping for 60 seconds");
              await sleep(60 * 1000);
            } else if (errorCode == "40") {
              throw error;
            }
          }
        }
      })
    );
  }
}
