import { default as Wallet } from "ethereumjs-wallet";
import {
  Account,
  ProviderInterface,
  ProviderOptions,
  RpcProvider,
} from "starknet";
import { AccountFile, Network, WalletName } from "./types";
import { networks, walletsRoot } from "./config";
import { homedir } from "os";
import { readFileSync } from "fs";
import { join } from "path";
import { ux } from "@oclif/core";

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
  selectRandom: boolean = false
): RpcProvider {
  const networkUrls = networks[network];
  if (networkUrls.length == 0) {
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
  wallets: WalletName[],
  provider: ProviderInterface | ProviderOptions
): Promise<Account[]> {
  const password = await ux.prompt("Input your password", {
    type: "hide",
  });
  const homeDir = homedir();
  const accounts: Account[] = [];
  for (const wallet of wallets) {
    const accountPath = join(homeDir, walletsRoot, wallet, "account.json");
    const accountString = readFileSync(accountPath).toString();
    const keystorePath = join(homeDir, walletsRoot, wallet, "keystore.json");
    const keystoreString = readFileSync(keystorePath).toString();
    const privateKey = await recoverPrivateKey(keystoreString, password);
    const accountAddress = (JSON.parse(accountString) as AccountFile).deployment
      .address;
    const account = new Account(provider, accountAddress!, privateKey!, "1");
    accounts.push(account);
  }
  return accounts;
}

export function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export function processError(error: Error): string {
  const errorMessage = error.message.split("\n")[1];
  let errorCode;
  try {
    errorCode = errorMessage.split(":")[0];
  } catch (error) {
    console.log("get code fail", errorMessage);
    errorCode = "-1";
  }
  return errorCode;
}
