import { Contract, CallData, RawArgs, num } from "starknet";
import { MY_WALLETS } from "./config";
import { OpInfo } from "./types";
import { loadAccounts, loadProvider, sleep } from "./utils";

import { snsc20Info } from "./opInfo/snsc-20";

async function run(info: OpInfo, targetTx: number = 1): Promise<void> {
  const { network, address, abi, calldatas, ops } = info;

  const provider = loadProvider(network);
  const contractInstance = new Contract(abi, address, provider);
  const accounts = await loadAccounts(MY_WALLETS, provider);

  if (!ops || !calldatas) {
    return console.log("no ops or calldatas");
  }

  let txCount = 0;

  // record init nonces
  const initNonces: bigint[] = [];
  await Promise.all(
    accounts.map(async (account) => {
      const initNonce = await account.getNonce();
      const nonce = num.toBigInt(initNonce);
      initNonces.push(nonce);
    })
  );
  console.log("initNonces:", initNonces);

  while (txCount < targetTx) {
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
              console.log(response.transaction_hash);
              txCount++;
              initNonces[index]++;
            } catch (error) {
              console.error(`Failed to invoke operation ${op}:`);
              await sleep(60 * 1000);
            }
          })
        );
      })
    );
  }
}

run(snsc20Info, 3).catch((err) => console.error(err));
