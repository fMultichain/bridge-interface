import "styles/globals.css";
import type { AppProps } from "next/app";
// import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import Web3ReactManager from "components/Web3ReactManager/index";
import dynamic from "next/dynamic";
import getLibrary from "functions/getLibrary";
import { Web3ModalProvider } from "@/context/Web3Modal";

const Web3ProviderNetwork = dynamic(
  () => import("../components/Web3ProviderNetwork/index"),
  { ssr: false }
);

export const metadata = {
  title: 'Web3Modal',
  description: 'Web3Modal Example'
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    // @ts-ignore TYPE NEEDS FIXING
    <Web3ReactProvider getLibrary={getLibrary}>
      {/* @ts-ignore TYPE NEEDS FIXING */}
      <Web3ModalProvider>
        {/* @ts-ignore TYPE NEEDS FIXING */}
        <Web3ProviderNetwork getLibrary={getLibrary}>
          {/* @ts-ignore TYPE NEEDS FIXING */}
          <Web3ReactManager>
            {/* @ts-ignore TYPE NEEDS FIXING */}
            <Component {...pageProps} />
            {/* @ts-ignore TYPE NEEDS FIXING */}
            {/* <Bridge {...pageProps} /> */}
          </Web3ReactManager>
        </Web3ProviderNetwork>
      </Web3ModalProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
