import { OpInfo } from "../types";

export const insInfo: OpInfo = {
  network: "goerli",
  ops: [
    {
      address:
        "0x000aa1a2c83c25cb981a97e05b9a47bbf660b768eeab2f227677fd6e63614ee3",
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
      calldatas: {
        ins: [
          "0x01",
          [
            "0x7b202270223a20226272632d3230222c226f70223a20226465706c6f79222c",
            "0x227469636b223a20226f726469222c226d6178223a20223231303030303030",
            "0x222c226c696d223a202231303030227d",
          ],
        ],
      },
    },
  ],
};
