import { haikoAbi } from "../abi/haiko";
import { OpInfo } from "../types";

export const haiko: OpInfo = {
  network: "mainnet",
  ops: [
    {
      address:
        "0x0038925b0bcf4dce081042ca26a96300d9e181b910328db54a6c89e5451503f5",
      abi: haikoAbi,
      calldatas: {
        modify_position: [
          "0x02ed8f2415d626661678b075d24dee9f2853e1bfbd45660ad78d97a0930c6699", // market_id: STRK/USDC 0.05% swap fee, 0.1% precision
          "5196340", // lower_limit u32
          "5208310", // upper_limit u32
          "2100512697969", // liquidity_delta i128.val u128
          "0", // liquidity_delta i128.sign bool
        ],
      },
    },
  ],
};
