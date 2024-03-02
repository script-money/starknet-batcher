export const haikoAbi = [
  {
    type: "impl",
    name: "MarketManager",
    interface_name: "amm::interfaces::IMarketManager::IMarketManager",
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
    type: "struct",
    name: "amm::types::i256::i256",
    members: [
      {
        name: "val",
        type: "core::integer::u256",
      },
      {
        name: "sign",
        type: "core::bool",
      },
    ],
  },
  {
    type: "struct",
    name: "amm::types::core::Position",
    members: [
      {
        name: "market_id",
        type: "core::felt252",
      },
      {
        name: "lower_limit",
        type: "core::integer::u32",
      },
      {
        name: "upper_limit",
        type: "core::integer::u32",
      },
      {
        name: "liquidity",
        type: "core::integer::u128",
      },
      {
        name: "base_fee_factor_last",
        type: "amm::types::i256::i256",
      },
      {
        name: "quote_fee_factor_last",
        type: "amm::types::i256::i256",
      },
    ],
  },
  {
    type: "struct",
    name: "amm::types::core::LimitOrder",
    members: [
      {
        name: "batch_id",
        type: "core::felt252",
      },
      {
        name: "liquidity",
        type: "core::integer::u128",
      },
    ],
  },
  {
    type: "struct",
    name: "amm::types::core::MarketInfo",
    members: [
      {
        name: "base_token",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "quote_token",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "width",
        type: "core::integer::u32",
      },
      {
        name: "strategy",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "swap_fee_rate",
        type: "core::integer::u16",
      },
      {
        name: "fee_controller",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "controller",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    type: "struct",
    name: "amm::types::core::MarketState",
    members: [
      {
        name: "liquidity",
        type: "core::integer::u128",
      },
      {
        name: "curr_limit",
        type: "core::integer::u32",
      },
      {
        name: "curr_sqrt_price",
        type: "core::integer::u256",
      },
      {
        name: "base_fee_factor",
        type: "core::integer::u256",
      },
      {
        name: "quote_fee_factor",
        type: "core::integer::u256",
      },
    ],
  },
  {
    type: "struct",
    name: "amm::types::core::ValidLimits",
    members: [
      {
        name: "min_lower",
        type: "core::integer::u32",
      },
      {
        name: "max_lower",
        type: "core::integer::u32",
      },
      {
        name: "min_upper",
        type: "core::integer::u32",
      },
      {
        name: "max_upper",
        type: "core::integer::u32",
      },
      {
        name: "min_width",
        type: "core::integer::u32",
      },
      {
        name: "max_width",
        type: "core::integer::u32",
      },
    ],
  },
  {
    type: "struct",
    name: "amm::types::core::Config::<amm::types::core::ValidLimits>",
    members: [
      {
        name: "value",
        type: "amm::types::core::ValidLimits",
      },
      {
        name: "fixed",
        type: "core::bool",
      },
    ],
  },
  {
    type: "enum",
    name: "amm::types::core::ConfigOption",
    variants: [
      {
        name: "Enabled",
        type: "()",
      },
      {
        name: "Disabled",
        type: "()",
      },
      {
        name: "OnlyOwner",
        type: "()",
      },
      {
        name: "OnlyStrategy",
        type: "()",
      },
    ],
  },
  {
    type: "struct",
    name: "amm::types::core::Config::<amm::types::core::ConfigOption>",
    members: [
      {
        name: "value",
        type: "amm::types::core::ConfigOption",
      },
      {
        name: "fixed",
        type: "core::bool",
      },
    ],
  },
  {
    type: "struct",
    name: "amm::types::core::MarketConfigs",
    members: [
      {
        name: "limits",
        type: "amm::types::core::Config::<amm::types::core::ValidLimits>",
      },
      {
        name: "add_liquidity",
        type: "amm::types::core::Config::<amm::types::core::ConfigOption>",
      },
      {
        name: "remove_liquidity",
        type: "amm::types::core::Config::<amm::types::core::ConfigOption>",
      },
      {
        name: "create_bid",
        type: "amm::types::core::Config::<amm::types::core::ConfigOption>",
      },
      {
        name: "create_ask",
        type: "amm::types::core::Config::<amm::types::core::ConfigOption>",
      },
      {
        name: "collect_order",
        type: "amm::types::core::Config::<amm::types::core::ConfigOption>",
      },
      {
        name: "swap",
        type: "amm::types::core::Config::<amm::types::core::ConfigOption>",
      },
    ],
  },
  {
    type: "struct",
    name: "amm::types::core::OrderBatch",
    members: [
      {
        name: "liquidity",
        type: "core::integer::u128",
      },
      {
        name: "filled",
        type: "core::bool",
      },
      {
        name: "limit",
        type: "core::integer::u32",
      },
      {
        name: "is_bid",
        type: "core::bool",
      },
      {
        name: "base_amount",
        type: "core::integer::u128",
      },
      {
        name: "quote_amount",
        type: "core::integer::u128",
      },
    ],
  },
  {
    type: "struct",
    name: "amm::types::i128::i128",
    members: [
      {
        name: "val",
        type: "core::integer::u128",
      },
      {
        name: "sign",
        type: "core::bool",
      },
    ],
  },
  {
    type: "struct",
    name: "amm::types::core::LimitInfo",
    members: [
      {
        name: "liquidity",
        type: "core::integer::u128",
      },
      {
        name: "liquidity_delta",
        type: "amm::types::i128::i128",
      },
      {
        name: "base_fee_factor",
        type: "core::integer::u256",
      },
      {
        name: "quote_fee_factor",
        type: "core::integer::u256",
      },
      {
        name: "nonce",
        type: "core::integer::u128",
      },
    ],
  },
  {
    type: "enum",
    name: "core::option::Option::<core::integer::u32>",
    variants: [
      {
        name: "Some",
        type: "core::integer::u32",
      },
      {
        name: "None",
        type: "()",
      },
    ],
  },
  {
    type: "struct",
    name: "amm::types::core::Depth",
    members: [
      {
        name: "limit",
        type: "core::integer::u32",
      },
      {
        name: "price",
        type: "core::integer::u256",
      },
      {
        name: "liquidity_delta",
        type: "amm::types::i128::i128",
      },
    ],
  },
  {
    type: "struct",
    name: "core::array::Span::<amm::types::core::Depth>",
    members: [
      {
        name: "snapshot",
        type: "@core::array::Array::<amm::types::core::Depth>",
      },
    ],
  },
  {
    type: "struct",
    name: "amm::types::core::ERC721PositionInfo",
    members: [
      {
        name: "base_token",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "quote_token",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "width",
        type: "core::integer::u32",
      },
      {
        name: "strategy",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "swap_fee_rate",
        type: "core::integer::u16",
      },
      {
        name: "fee_controller",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "controller",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "liquidity",
        type: "core::integer::u128",
      },
      {
        name: "base_amount",
        type: "core::integer::u256",
      },
      {
        name: "quote_amount",
        type: "core::integer::u256",
      },
      {
        name: "lower_limit",
        type: "core::integer::u32",
      },
      {
        name: "upper_limit",
        type: "core::integer::u32",
      },
    ],
  },
  {
    type: "enum",
    name: "core::option::Option::<amm::types::core::MarketConfigs>",
    variants: [
      {
        name: "Some",
        type: "amm::types::core::MarketConfigs",
      },
      {
        name: "None",
        type: "()",
      },
    ],
  },
  {
    type: "enum",
    name: "core::option::Option::<core::integer::u256>",
    variants: [
      {
        name: "Some",
        type: "core::integer::u256",
      },
      {
        name: "None",
        type: "()",
      },
    ],
  },
  {
    type: "enum",
    name: "core::option::Option::<core::integer::u64>",
    variants: [
      {
        name: "Some",
        type: "core::integer::u64",
      },
      {
        name: "None",
        type: "()",
      },
    ],
  },
  {
    type: "struct",
    name: "core::array::Span::<core::felt252>",
    members: [
      {
        name: "snapshot",
        type: "@core::array::Array::<core::felt252>",
      },
    ],
  },
  {
    type: "interface",
    name: "amm::interfaces::IMarketManager::IMarketManager",
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
        name: "is_market_whitelisted",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "is_token_whitelisted",
        inputs: [
          {
            name: "token",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "base_token",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "quote_token",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "width",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::integer::u32",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "strategy",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "fee_controller",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "swap_fee_rate",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::integer::u16",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "flash_loan_fee_rate",
        inputs: [
          {
            name: "token",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::integer::u16",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "position",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
          {
            name: "owner",
            type: "core::felt252",
          },
          {
            name: "lower_limit",
            type: "core::integer::u32",
          },
          {
            name: "upper_limit",
            type: "core::integer::u32",
          },
        ],
        outputs: [
          {
            type: "amm::types::core::Position",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "order",
        inputs: [
          {
            name: "order_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "amm::types::core::LimitOrder",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "market_id",
        inputs: [
          {
            name: "base_token",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "quote_token",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "width",
            type: "core::integer::u32",
          },
          {
            name: "strategy",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "swap_fee_rate",
            type: "core::integer::u16",
          },
          {
            name: "fee_controller",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "controller",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "market_info",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "amm::types::core::MarketInfo",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "market_state",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "amm::types::core::MarketState",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "market_configs",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "amm::types::core::MarketConfigs",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "batch",
        inputs: [
          {
            name: "batch_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "amm::types::core::OrderBatch",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "liquidity",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::integer::u128",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "curr_limit",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::integer::u32",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "curr_sqrt_price",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
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
        name: "limit_info",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
          {
            name: "limit",
            type: "core::integer::u32",
          },
        ],
        outputs: [
          {
            type: "amm::types::core::LimitInfo",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "is_limit_init",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
          {
            name: "width",
            type: "core::integer::u32",
          },
          {
            name: "limit",
            type: "core::integer::u32",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "next_limit",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
          {
            name: "is_buy",
            type: "core::bool",
          },
          {
            name: "width",
            type: "core::integer::u32",
          },
          {
            name: "start_limit",
            type: "core::integer::u32",
          },
        ],
        outputs: [
          {
            type: "core::option::Option::<core::integer::u32>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "donations",
        inputs: [
          {
            name: "asset",
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
        name: "reserves",
        inputs: [
          {
            name: "asset",
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
        name: "amounts_inside_position",
        inputs: [
          {
            name: "position_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "(core::integer::u256, core::integer::u256, core::integer::u256, core::integer::u256)",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "amounts_inside_order",
        inputs: [
          {
            name: "order_id",
            type: "core::felt252",
          },
          {
            name: "market_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "(core::integer::u256, core::integer::u256)",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "liquidity_to_amounts",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
          {
            name: "lower_limit",
            type: "core::integer::u32",
          },
          {
            name: "upper_limit",
            type: "core::integer::u32",
          },
          {
            name: "liquidity_delta",
            type: "core::integer::u128",
          },
        ],
        outputs: [
          {
            type: "(core::integer::u256, core::integer::u256)",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "amount_to_liquidity",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
          {
            name: "is_bid",
            type: "core::bool",
          },
          {
            name: "limit",
            type: "core::integer::u32",
          },
          {
            name: "amount",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::integer::u128",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "depth",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::array::Span::<amm::types::core::Depth>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "ERC721_position_info",
        inputs: [
          {
            name: "token_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "amm::types::core::ERC721PositionInfo",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "create_market",
        inputs: [
          {
            name: "base_token",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "quote_token",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "width",
            type: "core::integer::u32",
          },
          {
            name: "strategy",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "swap_fee_rate",
            type: "core::integer::u16",
          },
          {
            name: "fee_controller",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "start_limit",
            type: "core::integer::u32",
          },
          {
            name: "controller",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "configs",
            type: "core::option::Option::<amm::types::core::MarketConfigs>",
          },
        ],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "modify_position",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
          {
            name: "lower_limit",
            type: "core::integer::u32",
          },
          {
            name: "upper_limit",
            type: "core::integer::u32",
          },
          {
            name: "liquidity_delta",
            type: "amm::types::i128::i128",
          },
        ],
        outputs: [
          {
            type: "(amm::types::i256::i256, amm::types::i256::i256, core::integer::u256, core::integer::u256)",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "modify_position_with_referrer",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
          {
            name: "lower_limit",
            type: "core::integer::u32",
          },
          {
            name: "upper_limit",
            type: "core::integer::u32",
          },
          {
            name: "liquidity_delta",
            type: "amm::types::i128::i128",
          },
          {
            name: "referrer",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "(amm::types::i256::i256, amm::types::i256::i256, core::integer::u256, core::integer::u256)",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "create_order",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
          {
            name: "is_bid",
            type: "core::bool",
          },
          {
            name: "limit",
            type: "core::integer::u32",
          },
          {
            name: "liquidity_delta",
            type: "core::integer::u128",
          },
        ],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "collect_order",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
          {
            name: "order_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "(core::integer::u256, core::integer::u256)",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "swap",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
          {
            name: "is_buy",
            type: "core::bool",
          },
          {
            name: "amount",
            type: "core::integer::u256",
          },
          {
            name: "exact_input",
            type: "core::bool",
          },
          {
            name: "threshold_sqrt_price",
            type: "core::option::Option::<core::integer::u256>",
          },
          {
            name: "threshold_amount",
            type: "core::option::Option::<core::integer::u256>",
          },
          {
            name: "deadline",
            type: "core::option::Option::<core::integer::u64>",
          },
        ],
        outputs: [
          {
            type: "(core::integer::u256, core::integer::u256, core::integer::u256)",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "swap_multiple",
        inputs: [
          {
            name: "in_token",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "out_token",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "amount",
            type: "core::integer::u256",
          },
          {
            name: "route",
            type: "core::array::Span::<core::felt252>",
          },
          {
            name: "threshold_amount",
            type: "core::option::Option::<core::integer::u256>",
          },
          {
            name: "deadline",
            type: "core::option::Option::<core::integer::u64>",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "quote",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
          {
            name: "is_buy",
            type: "core::bool",
          },
          {
            name: "amount",
            type: "core::integer::u256",
          },
          {
            name: "exact_input",
            type: "core::bool",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "quote_multiple",
        inputs: [
          {
            name: "in_token",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "out_token",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "amount",
            type: "core::integer::u256",
          },
          {
            name: "route",
            type: "core::array::Span::<core::felt252>",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "unsafe_quote",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
          {
            name: "is_buy",
            type: "core::bool",
          },
          {
            name: "amount",
            type: "core::integer::u256",
          },
          {
            name: "exact_input",
            type: "core::bool",
          },
          {
            name: "ignore_strategy",
            type: "core::bool",
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
        name: "unsafe_quote_multiple",
        inputs: [
          {
            name: "in_token",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "out_token",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "amount",
            type: "core::integer::u256",
          },
          {
            name: "route",
            type: "core::array::Span::<core::felt252>",
          },
          {
            name: "ignore_strategy",
            type: "core::bool",
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
        name: "flash_loan",
        inputs: [
          {
            name: "token",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "amount",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "mint",
        inputs: [
          {
            name: "position_id",
            type: "core::felt252",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "burn",
        inputs: [
          {
            name: "position_id",
            type: "core::felt252",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "whitelist_markets",
        inputs: [
          {
            name: "market_ids",
            type: "core::array::Array::<core::felt252>",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "whitelist_tokens",
        inputs: [
          {
            name: "tokens",
            type: "core::array::Array::<core::starknet::contract_address::ContractAddress>",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "sweep",
        inputs: [
          {
            name: "receiver",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "token",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "amount",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "transfer_owner",
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
        name: "accept_owner",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "set_flash_loan_fee_rate",
        inputs: [
          {
            name: "token",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "fee",
            type: "core::integer::u16",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "set_market_configs",
        inputs: [
          {
            name: "market_id",
            type: "core::felt252",
          },
          {
            name: "new_configs",
            type: "amm::types::core::MarketConfigs",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    type: "impl",
    name: "ERC721Impl",
    interface_name: "openzeppelin::token::erc721::interface::IERC721",
  },
  {
    type: "interface",
    name: "openzeppelin::token::erc721::interface::IERC721",
    items: [
      {
        type: "function",
        name: "balance_of",
        inputs: [
          {
            name: "account",
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
        name: "owner_of",
        inputs: [
          {
            name: "token_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "safe_transfer_from",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "token_id",
            type: "core::integer::u256",
          },
          {
            name: "data",
            type: "core::array::Span::<core::felt252>",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "transfer_from",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "token_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "approve",
        inputs: [
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "token_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "set_approval_for_all",
        inputs: [
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "approved",
            type: "core::bool",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "get_approved",
        inputs: [
          {
            name: "token_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "is_approved_for_all",
        inputs: [
          {
            name: "owner",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "impl",
    name: "ERC721MetadataImpl",
    interface_name: "openzeppelin::token::erc721::interface::IERC721Metadata",
  },
  {
    type: "interface",
    name: "openzeppelin::token::erc721::interface::IERC721Metadata",
    items: [
      {
        type: "function",
        name: "name",
        inputs: [],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "symbol",
        inputs: [],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "token_uri",
        inputs: [
          {
            name: "token_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "impl",
    name: "ERC721CamelOnlyImpl",
    interface_name: "openzeppelin::token::erc721::interface::IERC721CamelOnly",
  },
  {
    type: "interface",
    name: "openzeppelin::token::erc721::interface::IERC721CamelOnly",
    items: [
      {
        type: "function",
        name: "balanceOf",
        inputs: [
          {
            name: "account",
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
        name: "ownerOf",
        inputs: [
          {
            name: "tokenId",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "safeTransferFrom",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "tokenId",
            type: "core::integer::u256",
          },
          {
            name: "data",
            type: "core::array::Span::<core::felt252>",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "transferFrom",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "tokenId",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "setApprovalForAll",
        inputs: [
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "approved",
            type: "core::bool",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "getApproved",
        inputs: [
          {
            name: "tokenId",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "isApprovedForAll",
        inputs: [
          {
            name: "owner",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "impl",
    name: "SRC5Impl",
    interface_name: "openzeppelin::introspection::interface::ISRC5",
  },
  {
    type: "interface",
    name: "openzeppelin::introspection::interface::ISRC5",
    items: [
      {
        type: "function",
        name: "supports_interface",
        inputs: [
          {
            name: "interface_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "name",
        type: "core::felt252",
      },
      {
        name: "symbol",
        type: "core::felt252",
      },
    ],
  },
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
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::CreateMarket",
    kind: "struct",
    members: [
      {
        name: "market_id",
        type: "core::felt252",
        kind: "key",
      },
      {
        name: "base_token",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "quote_token",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "width",
        type: "core::integer::u32",
        kind: "key",
      },
      {
        name: "strategy",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "swap_fee_rate",
        type: "core::integer::u16",
        kind: "key",
      },
      {
        name: "fee_controller",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "controller",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "start_limit",
        type: "core::integer::u32",
        kind: "data",
      },
      {
        name: "start_sqrt_price",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::ModifyPosition",
    kind: "struct",
    members: [
      {
        name: "caller",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "market_id",
        type: "core::felt252",
        kind: "key",
      },
      {
        name: "lower_limit",
        type: "core::integer::u32",
        kind: "key",
      },
      {
        name: "upper_limit",
        type: "core::integer::u32",
        kind: "key",
      },
      {
        name: "is_limit_order",
        type: "core::bool",
        kind: "key",
      },
      {
        name: "liquidity_delta",
        type: "amm::types::i128::i128",
        kind: "data",
      },
      {
        name: "base_amount",
        type: "amm::types::i256::i256",
        kind: "data",
      },
      {
        name: "quote_amount",
        type: "amm::types::i256::i256",
        kind: "data",
      },
      {
        name: "base_fees",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "quote_fees",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::CreateOrder",
    kind: "struct",
    members: [
      {
        name: "caller",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "market_id",
        type: "core::felt252",
        kind: "key",
      },
      {
        name: "order_id",
        type: "core::felt252",
        kind: "key",
      },
      {
        name: "limit",
        type: "core::integer::u32",
        kind: "key",
      },
      {
        name: "batch_id",
        type: "core::felt252",
        kind: "key",
      },
      {
        name: "is_bid",
        type: "core::bool",
        kind: "key",
      },
      {
        name: "amount",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::CollectOrder",
    kind: "struct",
    members: [
      {
        name: "caller",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "market_id",
        type: "core::felt252",
        kind: "key",
      },
      {
        name: "order_id",
        type: "core::felt252",
        kind: "key",
      },
      {
        name: "limit",
        type: "core::integer::u32",
        kind: "key",
      },
      {
        name: "batch_id",
        type: "core::felt252",
        kind: "key",
      },
      {
        name: "is_bid",
        type: "core::bool",
        kind: "key",
      },
      {
        name: "base_amount",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "quote_amount",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::Swap",
    kind: "struct",
    members: [
      {
        name: "caller",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "market_id",
        type: "core::felt252",
        kind: "key",
      },
      {
        name: "is_buy",
        type: "core::bool",
        kind: "key",
      },
      {
        name: "exact_input",
        type: "core::bool",
        kind: "key",
      },
      {
        name: "swap_id",
        type: "core::integer::u128",
        kind: "key",
      },
      {
        name: "amount_in",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "amount_out",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "fees",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "end_limit",
        type: "core::integer::u32",
        kind: "data",
      },
      {
        name: "end_sqrt_price",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "market_liquidity",
        type: "core::integer::u128",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::MultiSwap",
    kind: "struct",
    members: [
      {
        name: "caller",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "swap_id",
        type: "core::integer::u128",
        kind: "key",
      },
      {
        name: "in_token",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "out_token",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "amount_in",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "amount_out",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::FlashLoan",
    kind: "struct",
    members: [
      {
        name: "borrower",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "token",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "amount",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::Whitelist",
    kind: "struct",
    members: [
      {
        name: "market_id",
        type: "core::felt252",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::WhitelistToken",
    kind: "struct",
    members: [
      {
        name: "token",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::Donate",
    kind: "struct",
    members: [
      {
        name: "token",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "amount",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::Sweep",
    kind: "struct",
    members: [
      {
        name: "receiver",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "token",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "amount",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::ChangeOwner",
    kind: "struct",
    members: [
      {
        name: "old",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "new",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::ChangeFlashLoanFee",
    kind: "struct",
    members: [
      {
        name: "token",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "fee",
        type: "core::integer::u16",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::SetMarketConfigs",
    kind: "struct",
    members: [
      {
        name: "market_id",
        type: "core::felt252",
        kind: "key",
      },
      {
        name: "min_lower",
        type: "core::integer::u32",
        kind: "data",
      },
      {
        name: "max_lower",
        type: "core::integer::u32",
        kind: "data",
      },
      {
        name: "min_upper",
        type: "core::integer::u32",
        kind: "data",
      },
      {
        name: "max_upper",
        type: "core::integer::u32",
        kind: "data",
      },
      {
        name: "min_width",
        type: "core::integer::u32",
        kind: "data",
      },
      {
        name: "max_width",
        type: "core::integer::u32",
        kind: "data",
      },
      {
        name: "add_liquidity",
        type: "amm::types::core::ConfigOption",
        kind: "data",
      },
      {
        name: "remove_liquidity",
        type: "amm::types::core::ConfigOption",
        kind: "data",
      },
      {
        name: "create_bid",
        type: "amm::types::core::ConfigOption",
        kind: "data",
      },
      {
        name: "create_ask",
        type: "amm::types::core::ConfigOption",
        kind: "data",
      },
      {
        name: "collect_order",
        type: "amm::types::core::ConfigOption",
        kind: "data",
      },
      {
        name: "swap",
        type: "amm::types::core::ConfigOption",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "amm::contracts::market_manager::MarketManager::Referral",
    kind: "struct",
    members: [
      {
        name: "caller",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "referrer",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin::token::erc721::erc721::ERC721Component::Transfer",
    kind: "struct",
    members: [
      {
        name: "from",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "to",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "token_id",
        type: "core::integer::u256",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin::token::erc721::erc721::ERC721Component::Approval",
    kind: "struct",
    members: [
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "approved",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "token_id",
        type: "core::integer::u256",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin::token::erc721::erc721::ERC721Component::ApprovalForAll",
    kind: "struct",
    members: [
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "operator",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "approved",
        type: "core::bool",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin::token::erc721::erc721::ERC721Component::Event",
    kind: "enum",
    variants: [
      {
        name: "Transfer",
        type: "openzeppelin::token::erc721::erc721::ERC721Component::Transfer",
        kind: "nested",
      },
      {
        name: "Approval",
        type: "openzeppelin::token::erc721::erc721::ERC721Component::Approval",
        kind: "nested",
      },
      {
        name: "ApprovalForAll",
        type: "openzeppelin::token::erc721::erc721::ERC721Component::ApprovalForAll",
        kind: "nested",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin::introspection::src5::SRC5Component::Event",
    kind: "enum",
    variants: [],
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
    name: "amm::contracts::market_manager::MarketManager::Event",
    kind: "enum",
    variants: [
      {
        name: "CreateMarket",
        type: "amm::contracts::market_manager::MarketManager::CreateMarket",
        kind: "nested",
      },
      {
        name: "ModifyPosition",
        type: "amm::contracts::market_manager::MarketManager::ModifyPosition",
        kind: "nested",
      },
      {
        name: "CreateOrder",
        type: "amm::contracts::market_manager::MarketManager::CreateOrder",
        kind: "nested",
      },
      {
        name: "CollectOrder",
        type: "amm::contracts::market_manager::MarketManager::CollectOrder",
        kind: "nested",
      },
      {
        name: "Swap",
        type: "amm::contracts::market_manager::MarketManager::Swap",
        kind: "nested",
      },
      {
        name: "MultiSwap",
        type: "amm::contracts::market_manager::MarketManager::MultiSwap",
        kind: "nested",
      },
      {
        name: "FlashLoan",
        type: "amm::contracts::market_manager::MarketManager::FlashLoan",
        kind: "nested",
      },
      {
        name: "Whitelist",
        type: "amm::contracts::market_manager::MarketManager::Whitelist",
        kind: "nested",
      },
      {
        name: "WhitelistToken",
        type: "amm::contracts::market_manager::MarketManager::WhitelistToken",
        kind: "nested",
      },
      {
        name: "Donate",
        type: "amm::contracts::market_manager::MarketManager::Donate",
        kind: "nested",
      },
      {
        name: "Sweep",
        type: "amm::contracts::market_manager::MarketManager::Sweep",
        kind: "nested",
      },
      {
        name: "ChangeOwner",
        type: "amm::contracts::market_manager::MarketManager::ChangeOwner",
        kind: "nested",
      },
      {
        name: "ChangeFlashLoanFee",
        type: "amm::contracts::market_manager::MarketManager::ChangeFlashLoanFee",
        kind: "nested",
      },
      {
        name: "SetMarketConfigs",
        type: "amm::contracts::market_manager::MarketManager::SetMarketConfigs",
        kind: "nested",
      },
      {
        name: "Referral",
        type: "amm::contracts::market_manager::MarketManager::Referral",
        kind: "nested",
      },
      {
        name: "ERC721Event",
        type: "openzeppelin::token::erc721::erc721::ERC721Component::Event",
        kind: "flat",
      },
      {
        name: "SRC5Event",
        type: "openzeppelin::introspection::src5::SRC5Component::Event",
        kind: "flat",
      },
      {
        name: "UpgradeableEvent",
        type: "openzeppelin::upgrades::upgradeable::UpgradeableComponent::Event",
        kind: "flat",
      },
    ],
  },
];
