import { Web3Provider } from "@ethersproject/providers"; // ExternalProvider, JsonRpcFetchFunc

import { SupportedChainId } from "config/constants/networks";

const NETWORK_POLLING_INTERVALS: { [chainId: number]: number } = {
  [SupportedChainId.ARBITRUM]: 1_000,
  // [SupportedChainId.ARBITRUM_TESTNET]: 1_000,
  // [SupportedChainId.HARMONY]: 15_000,
  [SupportedChainId.FANTOM]: 1_000,
  [SupportedChainId.AVALANCHE]: 1_000,
};

export default function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(
    provider,
    typeof provider.chainId === "number"
      ? provider.chainId
      : typeof provider.chainId === "string"
      ? parseInt(provider.chainId)
      : "any"
  );
  library.pollingInterval = 15_000;
  library.detectNetwork().then((network) => {
    const networkPollingInterval = NETWORK_POLLING_INTERVALS[network.chainId];
    if (networkPollingInterval) {
      console.debug("Setting polling interval...", networkPollingInterval);
      library.pollingInterval = networkPollingInterval;
    }
  });
  return library;
}
