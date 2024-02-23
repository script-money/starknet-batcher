import { default as Wallet } from "ethereumjs-wallet";
import {
  Account,
  ProviderInterface,
  ProviderOptions,
  RpcProvider,
} from "starknet";
import { homedir } from "os";
import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { ux } from "@oclif/core";

import { Network, WalletName } from "./types";
import { networks, walletsRoot } from "./config";

export async function recoverPrivateKey(
  keystore: string,
  password: string
): Promise<string> {
  const wallet = await Wallet.fromV3(keystore, password);
  const privateKey = wallet.getPrivateKeyString();
  return privateKey;
}

export function loadProvider(
  network: Network,
  selectRandom = false
): RpcProvider {
  const networkUrls = networks[network];
  if (networkUrls.length === 0) {
    throw new Error("no network url found.");
  }
  const nodeUrl = selectRandom
    ? networkUrls[Math.floor(Math.random() * networkUrls.length)]
    : networkUrls[0];
  return new RpcProvider({
    nodeUrl,
  });
}

export async function loadAccounts(
  wallets: WalletName[] = [],
  provider: ProviderInterface | ProviderOptions,
  password?: string
): Promise<Account[]> {
  const resolvedPassword =
    password ||
    (await ux.prompt("Input your password", {
      type: "hide",
    }));

  const homeDir = homedir();
  const accounts: Account[] = await Promise.all(
    wallets.map(async (wallet) => {
      const accountPath = join(homeDir, walletsRoot, wallet, "account.json");
      const keystorePath = join(homeDir, walletsRoot, wallet, "keystore.json");

      if (!existsSync(accountPath) || !existsSync(keystorePath)) {
        throw new Error(`No path found in ~/${walletsRoot}/${wallet}`);
      }

      const [accountString, keystoreString] = await Promise.all([
        readFileSync(accountPath).toString(),
        readFileSync(keystorePath).toString(),
      ]);
      const privateKey = await recoverPrivateKey(
        keystoreString,
        resolvedPassword
      );
      const accountAddress =
        JSON.parse(accountString)?.deployment?.address ?? null;
      return new Account(provider, accountAddress, privateKey, "1");
    })
  );
  return accounts;
}

export function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export function processError(error: Error): string {
  const errorMessage = error.message.split("\n")[1];
  let errorCode;
  try {
    errorCode = errorMessage.split(":")[0].trim();
  } catch (error) {
    errorCode = "-1";
  }
  return errorCode;
}
