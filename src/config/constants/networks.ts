import { ChainId } from "./chainId";
// import { useActiveWeb3React } from 'services/web3'
export enum SupportedChainId {
  // ETHEREUM = ChainId.ETHEREUM,
  BASE = ChainId.BASE,
  BSC = ChainId.BSC,
  FANTOM = ChainId.FANTOM,
  AVALANCHE = ChainId.AVALANCHE,
  ARBITRUM = ChainId.ARBITRUM,
  MATIC = ChainId.MATIC,
}

export const ChainColor = {
  [ChainId.FANTOM]: "#1969FF",
  [ChainId.BSC]: "#F0B90B",
  [ChainId.AVALANCHE]: "#E84142",
  [ChainId.ARBITRUM]: "#4698FA",
  // TODO
  [ChainId.BASE]: "#FFFFFF",
};

export const ChainName = {
  [ChainId.FANTOM]: "FTM",
  [ChainId.ARBITRUM]: "ARB",
  [ChainId.AVALANCHE]: "AVAX",
  [ChainId.BASE]: "BASE",
};

export const ChainLogo = {
  [ChainId.FANTOM]: "/images/networks/fantom-white.svg",
  [ChainId.ARBITRUM]: "/images/networks/arbitrum.svg",
  [ChainId.AVALANCHE]: "/images/networks/avalanche.svg",
  [ChainId.BASE]: "/images/networks/base.svg",
};

export function getChainLogoURL(chainId: number) {
  let logoURL =
    "https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/fantom/assets";
  chainId == ChainId.FANTOM
    ? (logoURL =
        "https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/fantom/assets")
    : chainId == ChainId.AVALANCHE
    ? (logoURL =
        "https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/ethereum/assets")
    : chainId == ChainId.BSC
    ? (logoURL =
        "https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/binance/assets")
    : chainId == ChainId.MATIC
    ? (logoURL =
        "https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/polygon/assets")
    : chainId == ChainId.ARBITRUM
    ? (logoURL =
        "https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/arbitrum/assets")
    : "https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/fantom/assets";

  return logoURL;
}

export function getChainLogo(chainId: number) {
  let logoURL = "/images/networks/fantom-white.svg";
  chainId == ChainId.FANTOM
    ? (logoURL = "/images/networks/fantom-white.svg")
    : chainId == ChainId.AVALANCHE
    ? (logoURL = "/images/networks/avalanche.svg")
    : chainId == ChainId.BSC
    ? (logoURL = "/images/networks/binance.svg")
    : chainId == ChainId.MATIC
    ? (logoURL = "/images/networks/polygon.svg")
    : chainId == ChainId.ARBITRUM
    ? (logoURL = "/images/networks/arbitrum.svg")
    : "/images/networks/fantom-white.svg";

  return logoURL;
}
