import { OpInfo } from "../types";

export const simpleInfo: OpInfo = {
  network: "sepolia",
  address: "0x0719ce43f60fb719a9a297b804d1f6c54c03b994b8dca4f5172ee37830526313",
  abi: [
    {
      type: "impl",
      name: "Simple",
      interface_name: "cairo_simple::ISimple",
    },
    {
      type: "interface",
      name: "cairo_simple::ISimple",
      items: [
        {
          type: "function",
          name: "add",
          inputs: [],
          outputs: [],
          state_mutability: "external",
        },
      ],
    },
    {
      type: "event",
      name: "cairo_simple::Simple::Event",
      kind: "enum",
      variants: [],
    },
  ],
  calldatas: {
    add: [],
  },
  ops: ["add"],
};
