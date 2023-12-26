import { OpInfo } from "../types";

export const snsc20Info: OpInfo = {
  network: "mainnet",
  address: "0x0600386e4cd85d7bb925892b61b14ff019d3dd8e31432f4b97c8ee2462e0375d",
  abi: [
    {
      type: "impl",
      name: "Inscription",
      interface_name: "inscription::inscription::IInscription",
    },
    {
      type: "interface",
      name: "inscription::inscription::IInscription",
      items: [
        {
          type: "function",
          name: "inscription",
          inputs: [
            {
              name: "ins",
              type: "core::array::Array::<core::felt252>",
            },
            {
              name: "to",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
          outputs: [],
          state_mutability: "external",
        },
      ],
    },
    {
      type: "event",
      name: "inscription::inscription::Inscription::Ins",
      kind: "struct",
      members: [
        {
          name: "ins",
          type: "core::array::Array::<core::felt252>",
          kind: "data",
        },
        {
          name: "from",
          type: "core::starknet::contract_address::ContractAddress",
          kind: "data",
        },
        {
          name: "to",
          type: "core::starknet::contract_address::ContractAddress",
          kind: "data",
        },
      ],
    },
    {
      type: "event",
      name: "inscription::inscription::Inscription::Event",
      kind: "enum",
      variants: [
        {
          name: "Ins",
          type: "inscription::inscription::Inscription::Ins",
          kind: "nested",
        },
      ],
    },
  ],
  calldatas: {
    inscription: [
      "0x2",
      "0x7b2270223a22736e73632d3230222c226f70223a226d696e74222c22746963",
      "0x6b223a22737461726b222c22616d74223a2231303030227d",
      "0x000d5F442d503944fEB934349600ce0b234eFaf83760Ddc42DF89428bB4D0566",
    ],
  },
  ops: ["inscription"],
};
