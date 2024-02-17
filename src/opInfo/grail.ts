import { OpInfo } from "../types";

export const grailInfo: OpInfo = {
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
          "0x06f5b2f4f89542a80ccef4089db49b34bf25086e1f93dc09cf6a7c68498dccc4",
          "10000000000000000", // 0.01 ETH
          "0",
        ],
      },
    },
    {
      address:
        "0x06f5b2f4F89542A80CCEF4089DB49b34Bf25086E1F93dc09cF6A7C68498Dccc4",
      abi: [
        {
          type: "impl",
          name: "UpgradeableImpl",
          interface_name: "openzeppelin::upgrades::interface::IUpgradeable",
        },
        {
          type: "interface",
          name: "openzeppelin::upgrades::interface::IUpgradeable",
          items: [
            {
              type: "function",
              name: "upgrade",
              inputs: [
                {
                  name: "new_class_hash",
                  type: "core::starknet::class_hash::ClassHash",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "impl",
          name: "Mint",
          interface_name: "grails::mint::IMint",
        },
        {
          type: "struct",
          name: "core::integer::u256",
          members: [
            {
              name: "low",
              type: "core::integer::u128",
            },
            {
              name: "high",
              type: "core::integer::u128",
            },
          ],
        },
        {
          type: "enum",
          name: "core::bool",
          variants: [
            {
              name: "False",
              type: "()",
            },
            {
              name: "True",
              type: "()",
            },
          ],
        },
        {
          type: "interface",
          name: "grails::mint::IMint",
          items: [
            {
              type: "function",
              name: "allocation",
              inputs: [
                {
                  name: "owner",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "collect",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "mint",
              inputs: [],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "seedAllocations",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "startTime",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u64",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "unitPrice",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "impl",
          name: "OwnableImpl",
          interface_name: "openzeppelin::access::ownable::interface::IOwnable",
        },
        {
          type: "interface",
          name: "openzeppelin::access::ownable::interface::IOwnable",
          items: [
            {
              type: "function",
              name: "owner",
              inputs: [],
              outputs: [
                {
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "transfer_ownership",
              inputs: [
                {
                  name: "new_owner",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "renounce_ownership",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "eth",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "grails",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "startTime",
              type: "core::integer::u64",
            },
            {
              name: "owner",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred",
          kind: "struct",
          members: [
            {
              name: "previous_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
          kind: "struct",
          members: [
            {
              name: "previous_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::access::ownable::ownable::OwnableComponent::Event",
          kind: "enum",
          variants: [
            {
              name: "OwnershipTransferred",
              type: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred",
              kind: "nested",
            },
            {
              name: "OwnershipTransferStarted",
              type: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
              kind: "nested",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::upgrades::upgradeable::UpgradeableComponent::Upgraded",
          kind: "struct",
          members: [
            {
              name: "class_hash",
              type: "core::starknet::class_hash::ClassHash",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::upgrades::upgradeable::UpgradeableComponent::Event",
          kind: "enum",
          variants: [
            {
              name: "Upgraded",
              type: "openzeppelin::upgrades::upgradeable::UpgradeableComponent::Upgraded",
              kind: "nested",
            },
          ],
        },
        {
          type: "event",
          name: "grails::mint::Mint::Event",
          kind: "enum",
          variants: [
            {
              name: "OwnableEvent",
              type: "openzeppelin::access::ownable::ownable::OwnableComponent::Event",
              kind: "flat",
            },
            {
              name: "UpgradeableEvent",
              type: "openzeppelin::upgrades::upgradeable::UpgradeableComponent::Event",
              kind: "flat",
            },
          ],
        },
      ],
      calldatas: {
        mint: [],
      },
    },
  ],
};
