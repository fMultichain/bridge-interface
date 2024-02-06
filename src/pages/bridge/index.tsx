import React, { useEffect } from "react";
import BridgeInteraction from "components/BridgeInteraction";
import MetaHeader from "components/MetaHeader.tsx";
import useActiveWeb3React from "@/hooks/useActiveWeb3React";
import { connectorLocalStorageKey } from "config/connectors/index";
import { injected } from "config/constants/wallets";
import { BLUE } from "@/config";
import { Header } from "@/components/Header";

export default function Bridge() {
  const { account, activate } = useActiveWeb3React();
  
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

        {/* <div className={`grid grid-cols-1 flex-grow ${"sm:gap-36"}`} data-theme="exampleUi">
            <div className={"grids sm:grid sm:grid-cols-2 flex-grow justfify-center w-[100%] h-[100%] p-2 m-0 gap-2"}>
              <div
                className="grids text-center text-2xl font-bold justify-center rounded-lg border-8 sm:w-[100%] sm:h-[100%] mb-4"
                style={{
                  display: "grid",
                  justifyContent: "center",
                  // alignItems: "center",
                  borderTopColor: "#005AFF", // BLUE
                  borderLeftColor: "#005AFF", // BLUE
                  borderRightColor: "#005AFF", // BLUE
                  borderBottomColor: "#005AFF", // BLUE
                  fontWeight: "bold",
                  padding: "0.5rem",
                }}
              >
                <Image
                  className="grids text-center font-bold justify-center rounded-lg sm:w-[100%] sm:h-[100%] sm:mb-64 md:mb-32 lg:mb-24"
                  src="/assets/bridge.gif"
                  alt="Bridge"
                  width={2400}
                  height={1800}
                />
              </div>
            </div> */}
      </div>
      {/* </div> */}
    </div>
  );
}