import { Contract, CallData, RawArgs, num, CustomError } from "starknet";
import { MY_WALLETS } from "./config";
import { OpInfo } from "./types";
import { loadAccounts, loadProvider, sleep } from "./utils";

import { snsc20Info } from "./opInfo/snsc-20";
import { simpleInfo } from "./opInfo/simple";

async function run(
  info: OpInfo,
  targetTxPerAccount: number = 1
): Promise<void> {
  const { network, address, abi, calldatas, ops } = info;
  console.log("OpInfo:", network, ops);

  const provider = loadProvider(network, false);
  console.log("provider: ", provider.nodeUrl);
  const contractInstance = new Contract(abi, address, provider);
  const accounts = await loadAccounts(MY_WALLETS, provider);

  if (!ops || !calldatas) {
    return console.log("no ops or calldatas");
  }

  let txCount = 0;

  // record init nonces
  const initNonces: bigint[] = await Promise.all(
    accounts.map(async (account) => {
      const nonce = num.toBigInt(await account.getNonce());
      return nonce;
    })
  );
  console.log("initNonces:", initNonces);

  while (txCount < targetTxPerAccount * MY_WALLETS.length) {
    await Promise.all(
      accounts.map(async (account, index) => {
        contractInstance.connect(account);
        return Promise.all(
          ops.map(async (op) => {
            const calldata = CallData.compile(calldatas[op] as RawArgs);
            try {
              const response = await contractInstance.invoke(op, calldata, {
                parseRequest: false,
                nonce: initNonces[index],
              });
              console.log(`${MY_WALLETS[index]}: ${response.transaction_hash}`);
              txCount++;
              initNonces[index]++;
              await sleep(5 * 1000); // 5 seconds per tx
            } catch (error: any) {
              const errorMessage = error.message.split("\n")[1];
              let errorCode;
              try {
                errorCode = errorMessage.split(":")[0];
              } catch (error) {
                console.log("get code fail", errorMessage);
                errorCode = "-1";
              }
              console.error(
                `${MY_WALLETS[index]}: Failed to invoke operation 🤖${MY_WALLETS[index]} ['${op}']: ${errorCode}`
              );
              if (errorCode == "63") {
                await sleep(60 * 1000);
              } else if (error == "40") {
                initNonces[index] = num.toBigInt(await account.getNonce());
              }
            }
          })
        );
      })
    );
  }
}

run(simpleInfo, 5).catch((err) => console.error("Error in run:", err));
