import React from "react";
import BridgeInteraction from "components/BridgeInteraction";
import MetaHeader from "components/MetaHeader.tsx";
import { BLUE } from "@/config";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

export default function Bridge() {
  const { address } = useWeb3ModalAccount()

  return (
    <div
    style={{
      display: 'grid',
      backgroundColor: BLUE,
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
          <BridgeInteraction account={address} />
        </div>
      </div>
    </div>
  );
}