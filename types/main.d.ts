import { OpInfo } from "./types";
/**
 * Executes operations on Starknet based on the operation information.
 *
 * @param info - Operation information including network, abi and operations list.
 * @param opNames - Names of the operation functions to be executed.
 * @param wallets - Wallet files to perform operations from.
 * @param password - Optional password for the wallets, set undefined to input manually.
 * @param targetTxPerAccount - Target number of transactions per account. Default is 1.
 */
export declare function run(info: OpInfo, opNames: string[], wallets: string[], password?: string, targetTxPerAccount?: number): Promise<void>;
