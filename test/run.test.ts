import { test, expect } from "bun:test";

import { run } from "../src/main";
import { simpleInfo } from "../src/opInfo/simple";
import { OpInfo } from "../src/types";
import { erc20Abi } from "../src/abi/erc20";

const NO_FIND_WALLETS = ["no_find_wallet"]; // ~/.starkli-wallets/no_find_wallet/account.json
const VALID_WALLETS = ["wallet_for_test"]; // ~/.starkli-wallets/wallet_for_test/account.json
const TEST_WALLET_PASSWORD = "123456";

test("Should throw error no wallet find", () => {
  expect(run(simpleInfo, ["add"], NO_FIND_WALLETS)).rejects.toThrow(
    "No path found in ~/.starkli-wallets/no_find_wallet"
  );
});

test(
  "Should simulate add",
  async () => {
    expect(
      run(simpleInfo, ["add"], VALID_WALLETS, TEST_WALLET_PASSWORD, 1)
    ).resolves.toBeUndefined();
  },
  { timeout: 50000 }
);

test(
  "Should simulate transfer eth failed",
  () => {
    const ethTransfer: OpInfo = {
      network: "sepolia",
      ops: [
        {
          address:
            "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7", // eth contract address
          abi: erc20Abi,
          calldatas: {
            transfer: [
              "0x000d5F442d503944fEB934349600ce0b234eFaf83760Ddc42DF89428bB4D0566", // recipient
              "0x8ac7230489e80000", // 10 ether, uint256 low
              "0x0", // uint256 high
            ],
          },
        },
      ],
    };

    expect(
      run(ethTransfer, ["transfer"], VALID_WALLETS, TEST_WALLET_PASSWORD, 1)
    ).rejects.toThrow();
  },
  { timeout: 50000 }
);
