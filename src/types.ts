import { Abi, RawArgsObject } from "starknet";

export type WalletName = string;
export type Address = `0x${string}`;
export type Network = "mainnet" | "goerli" | "sepolia";

export interface AccountFile {
  version: number;
  variant: {
    type: "argent" | "braavos";
    version: number;
    owner: Address;
    guardian: Address;
  };
  deployment: {
    status: "deployed";
    class_hash: Address;
    address: Address;
  };
}

export interface OpInfo {
  network: Network;
  address: Address;
  abi: Abi;
  calldatas?: RawArgsObject;
  ops?: string[];
}
