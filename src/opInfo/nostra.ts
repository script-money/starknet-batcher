import { MY_ACCOUNT, OpInfo } from "../types";

export const nostraInfo: OpInfo = {
  network: "mainnet",
  ops: [
    {
      address:
        "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
      abi: [
        {
          members: [
            {
              name: "low",
              offset: 0,
              type: "felt",
            },
            {
              name: "high",
              offset: 1,
              type: "felt",
            },
          ],
          name: "Uint256",
          size: 2,
          type: "struct",
        },
        {
          data: [
            {
              name: "from_",
              type: "felt",
            },
            {
              name: "to",
              type: "felt",
            },
            {
              name: "value",
              type: "Uint256",
            },
          ],
          keys: [],
          name: "Transfer",
          type: "event",
        },
        {
          data: [
            {
              name: "owner",
              type: "felt",
            },
            {
              name: "spender",
              type: "felt",
            },
            {
              name: "value",
              type: "Uint256",
            },
          ],
          keys: [],
          name: "Approval",
          type: "event",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              name: "name",
              type: "felt",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              name: "symbol",
              type: "felt",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              name: "totalSupply",
              type: "Uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              name: "decimals",
              type: "felt",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              name: "account",
              type: "felt",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              name: "balance",
              type: "Uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              name: "owner",
              type: "felt",
            },
            {
              name: "spender",
              type: "felt",
            },
          ],
          name: "allowance",
          outputs: [
            {
              name: "remaining",
              type: "Uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "permittedMinter",
          outputs: [
            {
              name: "minter",
              type: "felt",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "initialized",
          outputs: [
            {
              name: "res",
              type: "felt",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "get_version",
          outputs: [
            {
              name: "version",
              type: "felt",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "get_identity",
          outputs: [
            {
              name: "identity",
              type: "felt",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              name: "init_vector_len",
              type: "felt",
            },
            {
              name: "init_vector",
              type: "felt*",
            },
          ],
          name: "initialize",
          outputs: [],
          type: "function",
        },
        {
          inputs: [
            {
              name: "recipient",
              type: "felt",
            },
            {
              name: "amount",
              type: "Uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              name: "success",
              type: "felt",
            },
          ],
          type: "function",
        },
        {
          inputs: [
            {
              name: "sender",
              type: "felt",
            },
            {
              name: "recipient",
              type: "felt",
            },
            {
              name: "amount",
              type: "Uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              name: "success",
              type: "felt",
            },
          ],
          type: "function",
        },
        {
          inputs: [
            {
              name: "spender",
              type: "felt",
            },
            {
              name: "amount",
              type: "Uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              name: "success",
              type: "felt",
            },
          ],
          type: "function",
        },
        {
          inputs: [
            {
              name: "spender",
              type: "felt",
            },
            {
              name: "added_value",
              type: "Uint256",
            },
          ],
          name: "increaseAllowance",
          outputs: [
            {
              name: "success",
              type: "felt",
            },
          ],
          type: "function",
        },
        {
          inputs: [
            {
              name: "spender",
              type: "felt",
            },
            {
              name: "subtracted_value",
              type: "Uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              name: "success",
              type: "felt",
            },
          ],
          type: "function",
        },
        {
          inputs: [
            {
              name: "recipient",
              type: "felt",
            },
            {
              name: "amount",
              type: "Uint256",
            },
          ],
          name: "permissionedMint",
          outputs: [],
          type: "function",
        },
        {
          inputs: [
            {
              name: "account",
              type: "felt",
            },
            {
              name: "amount",
              type: "Uint256",
            },
          ],
          name: "permissionedBurn",
          outputs: [],
          type: "function",
        },
      ],
      calldatas: {
        approve: [
          "0x057146f6409deb4c9fa12866915dd952aa07c1eb2752e451d7f3b042086bdeb8",
          "0x13fbe85edc90000", // 0.09 ETH
          "0x0",
        ],
      },
    },
    {
      address:
        "0x057146f6409deb4c9fa12866915dd952aa07c1eb2752e451d7f3b042086bdeb8", // Contract — Nostra: Interest Bearing and Collateralized ETH
      abi: [
        {
          name: "mint",
          type: "function",
          inputs: [
            {
              name: "to",
              type: "felt",
            },
            {
              name: "amount",
              type: "Uint256",
            },
          ],
          outputs: [],
        },
      ],
      calldatas: {
        mint: [
          MY_ACCOUNT, // my address
          "0x03328b944c4000",
          "0x0",
        ],
      },
    },
  ],
};
