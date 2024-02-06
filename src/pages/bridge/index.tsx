import React, { useEffect } from "react";
import BridgeInteraction from "components/BridgeInteraction";
import MetaHeader from "components/MetaHeader.tsx";
import useActiveWeb3React from "@/hooks/useActiveWeb3React";
import { connectorLocalStorageKey } from "config/connectors/index";
import { injected } from "config/constants/wallets";
import { BLUE } from "@/config";
import { Header } from "@/components/Header";
// import { useWeb3Modal } from '@web3modal/ethers/react'
// import { useWeb3ModalAccount } from '@web3modal/ethers/react' // useWeb3ModalProvider,

export default function Bridge() {
  const { account, activate } = useActiveWeb3React();
  // const { open } = useWeb3Modal()

  useEffect(() => {
    console.log(window.localStorage?.getItem(connectorLocalStorageKey));
  
      activate(injected, undefined, true).catch((error) => {
        activate(injected);
        console.log(error);
      });
  }, []);

  return (
    <div
    style={{
      display: 'grid',
      backgroundColor: BLUE,
      // height: '100%',
      // width: '100%',
      // height: '100rem',
      // backgroundColor: "-moz-initial"
    }}
    >
      {/* @ts-ignore: TODO */}
      <MetaHeader title="Bridge | lz-fMULTI" description="Bridge lz-fMULTI.">
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap"
          rel="stylesheet"
        />
      </MetaHeader>
      {/* @ts-ignore */}
      <Header />
      <div
        className={`grid grid-cols-1 flex-grow`}
        data-theme="defaultPageStyle"
      >
        <div
          className="grids text-center text-2xl font-bold justify-center rounded-lg border-8 p-0 m-1.5"
          style={{
            borderTopColor: BLUE, // BLUE
            borderLeftColor: BLUE, // BLUE
            borderRightColor: BLUE, // BLUE
            borderBottomColor: BLUE, // BLUE
            fontWeight: "bold",
          }}
        >
          {/* @ts-ignore */}
          <BridgeInteraction account={account} />
        </div>
      </div>
    </div>
  );
}