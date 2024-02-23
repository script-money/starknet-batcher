import { OpInfo } from "../types";
import { erc20Abi } from "../abi/erc20";

export const ethTransfer: OpInfo = {
  network: "mainnet",
  ops: [
    {
      address:
        "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
      abi: erc20Abi,
      calldatas: {
        transfer: [
          "0x000d5F442d503944fEB934349600ce0b234eFaf83760Ddc42DF89428bB4D0566", // recipient
          "0x58d15e17628000", // amount 0.025
          "0x0", // uint256 high
        ],
      },
    },
  ],
};
