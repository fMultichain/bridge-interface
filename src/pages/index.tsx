import type { NextPage } from "next";
import Head from "next/head";
import { useActiveWeb3React } from "hooks/useActiveWeb3React";
import { useEffect } from "react";
import { injected } from "config/constants/wallets";
import { connectorLocalStorageKey } from "config/connectors/index";
import formatAddress from "functions/formatAddress";
import { ChainColor, ChainId } from "config";
import { getChainInfo } from "functions/getChainInfo";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { account, activate, chainId } = useActiveWeb3React();
  const fontColor = ChainColor[chainId ?? ChainId.FANTOM];
  const router = useRouter();

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
        backgroundColor: "black",
        color: fontColor,
        fontSize: "1.2rem",
        fontStyle: "bold",
      }}
    >
      <Head>
        <title>Bridge lz-fMULTI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "4px solid",
          borderRadius: "5px",
          padding: "20px",
        }}
      >
        {account
          ? `Connected to ${formatAddress(account ?? "")} on ${getChainInfo(
              chainId,
              "NETWORK"
            )}`
          : "Wallet Disconnected"}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "4px solid",
          borderRadius: "5px",
          padding: "20px",
          marginTop: "20px",
        }}
        onClick={() => router.push("/Bridge")}
      >
        {account ? `Bridge Assets` : "Wallet Disconnected"}
      </div>
    </div>
  );
};

export default Home;
