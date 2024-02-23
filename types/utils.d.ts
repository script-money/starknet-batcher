import { Account, ProviderInterface, ProviderOptions, RpcProvider } from "starknet";
import { Network } from "./types";
export declare function recoverPrivateKey(keystore: string, password: string): Promise<string>;
export declare function loadProvider(network: Network, selectRandom?: boolean): RpcProvider;
export declare function loadAccounts(wallets: string[] | undefined, provider: ProviderInterface | ProviderOptions, password?: string): Promise<Account[]>;
export declare function sleep(time: number): Promise<unknown>;
export declare function processError(error: Error): string;
