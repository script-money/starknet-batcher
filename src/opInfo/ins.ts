import { OpInfo } from "../types";

export const insInfo: OpInfo = {
  network: "goerli",
  address: "0x000aa1a2c83c25cb981a97e05b9a47bbf660b768eeab2f227677fd6e63614ee3",
  abi: [
    {
      type: "impl",
      name: "InsImpl",
      interface_name: "src::contracts::ins::InsContract",
    },
    {
      type: "interface",
      name: "src::contracts::ins::InsContract",
      items: [
        {
          type: "function",
          name: "ins",
          inputs: [
            {
              name: "bitwork_id",
              type: "core::integer::u32",
            },
            {
              name: "ins",
              type: "core::array::Array::<core::felt252>",
            },
          ],
          outputs: [],
          state_mutability: "external",
        },
        {
          type: "function",
          name: "get_prefix",
          inputs: [
            {
              name: "bitwork_id",
              type: "core::integer::u32",
            },
          ],
          outputs: [
            {
              type: "core::integer::u128",
            },
          ],
          state_mutability: "view",
        },
      ],
    },
    {
      type: "constructor",
      name: "constructor",
      inputs: [],
    },
    {
      type: "event",
      name: "src::contracts::ins::Ins::Ins",
      kind: "struct",
      members: [
        {
          name: "inscribe",
          type: "core::felt252",
          kind: "data",
        },
        {
          name: "ins",
          type: "core::array::Array::<core::felt252>",
          kind: "data",
        },
      ],
    },
    {
      type: "event",
      name: "src::contracts::ins::Ins::Event",
      kind: "enum",
      variants: [
        {
          name: "Ins",
          type: "src::contracts::ins::Ins::Ins",
          kind: "nested",
        },
      ],
    },
  ],
};
