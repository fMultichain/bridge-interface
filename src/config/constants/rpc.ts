import { ChainId } from "./chainId";

export const RPC = {
  [ChainId.BASE]: "https://rpc.ankr.com/base",
  [ChainId.ARBITRUM]: "https://rpc.ankr.com/arbitrum",
  [ChainId.FANTOM]: "https://rpc.ankr.com/fantom",
  [ChainId.AVALANCHE]: "https://rpc.ankr.com/avalanche",
};

export const RPCS = {
  [ChainId.BASE]: "https://rpc.ankr.com/base",
  [ChainId.FANTOM]: [
    "https://rpc.ankr.com/fantom",
    "https://rpcapi.fantom.network",
  ],
  [ChainId.AVALANCHE]: [
    "https://rpc.ankr.com/avalanche",
    "https://api.avax.network/ext/bc/C/rpc",
  ],
  [ChainId.ARBITRUM]: ["https://rpc.ankr.com/arbitrum", "https://arb1.arbitrum.io/rpc"],
};
