// import { RPC } from "./rpc"

// export const ChainId = {
//   BASE: 8453,
//   FANTOM: 250,
//   ARBITRUM: 42161,
//   AVALANCHE: 43114,
// }

export enum ChainId {
  BASE = 8453,
  FANTOM = 250,
  MANTLE = 5000,
  ARBITRUM = 42161,
  AVALANCHE = 43114,
}

const base = {
  chainId: ChainId.BASE,
  name: 'Coinbase',
  currency: 'ETH',
  explorerUrl: 'https://basescan.org',
  rpcUrl: "https://rpc.ankr.com/base"
}
const fantom = {
  chainId: ChainId.FANTOM,
  name: 'Fantom Opera',
  currency: 'FTM',
  explorerUrl: 'https://ftmscan.com',
  rpcUrl: "https://rpc.ankr.com/fantom"
}
const arbitrum = {
  chainId: ChainId.ARBITRUM,
  name: 'Arbitrum',
  currency: 'ETH',
  explorerUrl: 'https://arbiscan.io',
  rpcUrl:"https://rpc.ankr.com/arbitrum"
}
const avalanche = {
  chainId: ChainId.AVALANCHE,
  name: 'Avalanche',
  currency: 'AVAX',
  explorerUrl: 'https://snowtrace.io',
  rpcUrl: "https://rpc.ankr.com/avalanche"
}

const mantle = {
  chainId: ChainId.MANTLE,
  name: 'Mantle',
  currency: 'MNT',
  explorerUrl: 'https://mantlescan.info',
  rpcUrl: "https://rpc.ankr.com/mantle"
}

export const chains = [base, mantle, fantom, arbitrum, avalanche]