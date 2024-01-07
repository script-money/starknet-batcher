import { Abi, RawArgsObject } from "starknet";

export type WalletName = string;
export type Address = `0x${string}`;
export type Network = "mainnet" | "goerli" | "sepolia";
export const MY_ACCOUNT = "MY_ACCOUNT";

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
  ops?: Op[];
}

export interface Op {
  address: Address;
  abi: Abi;
  calldatas: RawArgsObject;
}
