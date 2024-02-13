import { ChainId } from "./chainId";

export enum SupportedChainId {
  BASE = ChainId.BASE,
  MANTLE = ChainId.MANTLE,
  FANTOM = ChainId.FANTOM,
  AVALANCHE = ChainId.AVALANCHE,
  ARBITRUM = ChainId.ARBITRUM,
}

export const ChainColor = {
  [ChainId.FANTOM]: "#1969FF",
  [ChainId.AVALANCHE]: "#E84142",
  [ChainId.ARBITRUM]: "#4698FA",
  // TODO
  [ChainId.BASE]: "#FFFFFF",
  [ChainId.MANTLE]: "#FFFFFF",
};

export const ChainName: any = {
  [ChainId.ETHEREUM]: "Change Network",
  [ChainId.FANTOM]: "FTM",
  [ChainId.ARBITRUM]: "ARB",
  [ChainId.AVALANCHE]: "AVAX",
  [ChainId.BASE]: "BASE",
  [ChainId.MANTLE]: "MANTLE",
};

export const NetworkName: any = {
  [ChainId.ETHEREUM]: "Change Network",
  [ChainId.FANTOM]: "Fantom Opera",
  [ChainId.MANTLE]: "Mantle",
  [ChainId.ARBITRUM]: "Arbitrum One",
  [ChainId.AVALANCHE]: "Avalanche",
  [ChainId.BASE]: "Coinbase",
};

export function getChainLogoURL(chainId: number) {
  let logoURL =
    "https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/fantom/assets";
  chainId == ChainId.FANTOM
    ? (logoURL =
        "https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/fantom/assets")
    : chainId == ChainId.AVALANCHE
    ? (logoURL =
        "https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/polygon/assets")
    : chainId == ChainId.ARBITRUM
    ? (logoURL =
        "https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/arbitrum/assets")
    : "https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/fantom/assets";

  return logoURL;
}
