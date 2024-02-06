import type { NextPage } from "next";
import Head from "next/head";
import { useActiveWeb3React } from "hooks/useActiveWeb3React";
import { useEffect } from "react";
import { injected } from "config/constants/wallets";
import { connectorLocalStorageKey } from "config/connectors/index";
// import formatAddress from "functions/formatAddress";
import { BLUE, ChainColor, ChainId } from "config";
// import { getChainInfo } from "functions/getChainInfo";
// import { useRouter } from "next/router";
import { Header } from "@/components/Header";
import BridgeInteraction from "@/components/BridgeInteraction";

const Home: NextPage = () => {
  const { activate, chainId } = useActiveWeb3React();
  const fontColor = ChainColor[chainId ?? ChainId.FANTOM];
  // const router = useRouter();

  useEffect(() => {
    console.log(window.localStorage.getItem(connectorLocalStorageKey));

    activate(injected, undefined, true).catch((error) => {
      activate(injected);
      console.log(error);
    });
  }, []);

  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: BLUE,
      color: fontColor,
      fontSize: "1.2rem",
      fontStyle: "bold",
    }}
    >
      {/* @ts-ignore */}
      <Header />
      <div
        style={{
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          // justifyContent: "center",
          // height: "100vh",
          // backgroundColor: BLUE,
          // color: fontColor,
          // fontSize: "1.2rem",
          // fontStyle: "bold",
        }}
      >
        <Head>
          <title>Bridge lz-fMULTI</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "4px solid",
            borderRadius: "5px",
            padding: "20px",
            color: "#FFFFFF",
            // backgroundColor: BLUE,
          }}
        >
          {account
            ? `Connected to ${formatAddress(account ?? "")} on ${getChainInfo(
              chainId,
              "NETWORK"
            )}`
            : "Wallet Disconnected"}
        </div> */}
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "4px solid",
            borderRadius: "5px",
            padding: "20px",
            marginTop: "20px",
            color: "#FFFFFF",
          }}
          onClick={() => router.push("/bridge")}
        >
          {account ? `Bridge Assets` : "Wallet Disconnected"}
        </div> */}
        {/* @ts-ignore */}
        <BridgeInteraction />
      </div>
    </div>
  );
};

export default Home;
