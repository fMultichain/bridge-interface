import { useState } from "react";

import {
  ChainId,
  ChainName,
  ENDPOINT_ID,
  // LZFMULTI_ADDRESS,
} from "config/constants";
import { formatNumber } from "functions/formatNumber";
// import { useTokenBalance } from "hooks/useTokenBalance";
import useActiveWeb3React from "@/hooks/useActiveWeb3React";
import traverseChains from "@/functions/traverseChains";
import { NextPage } from "next";

const BridgeInteraction: NextPage = () => {
  const { account, chainId } = useActiveWeb3React();
  // console.log(account)
  const fromChain: ChainId = chainId as ChainId;
  const toChains = [
    ChainId.FANTOM,
    ChainId.BASE,
    ChainId.ARBITRUM,
    ChainId.AVALANCHE,
  ].filter((chain: ChainId) => chain !== fromChain);
  const [toChain, setToChain] = useState(toChains[0]);
  const chains = toChains.filter((chain: ChainId) => chain !== toChain);
  // const formattedBalance = useTokenBalance(account, LZFMULTI_ADDRESS[fromChain]) ?? "0"
  const formattedBalance = '10'
  const balance = '10' // Number(formattedBalance) * 1e18;

  const ChainSelector = () => {
    const [showChains, setShowChains] = useState(false);
    const toggleShow = () => {
      setShowChains(!showChains);
    };
    return (
      <div>
        <div className={"grid grid-cols-1"}>
          <div
            onClick={() => toggleShow()}
            style={{
              display: "flex",
              justifyContent: "center",
              border: "4px solid",
              borderRadius: "10px",
              padding: "8px 4px",
              fontWeight: "bold",
              backgroundColor: "#005AFF", // BLUE
              color: "#FFFFFF",
            }}
          >
            {`${ChainName[toChain]}`}
          </div>
        </div>
        {showChains && (
          <div onClick={() => toggleShow()} className="grid grid-cols-2 gap-2">
            {chains.map((chain: ChainId) => (
              <div
                key={chain}
                onClick={() => {
                  setToChain(chain);
                }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  border: "4px solid",
                  borderRadius: "10px",
                  // padding: "8px 4px",
                  fontWeight: "bold",
                  backgroundColor: "#005AFF", // BLUE
                  color: "#FFFFFF",
                }}
              >
                {ChainName[chain]}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // async function TraverseButton(amount) {
  const TraverseButton = (account) => {
    account // silences unused error
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "4px solid",
          borderRadius: "10px",
          padding: "8px 6px",
          paddingTop: "16px",
          fontSize: "21px",
          fontWeight: "bold",
          backgroundColor: "#005AFF", // BLUE
          color: "#FFFFFF",
        }}
        // onClick={() => handleTraverse(Number(amount), toChain, fromChain)}
        // onClick={async () => await handleTraverseThis(account, Number(amount), toChain, fromChain)}
        onClick={async () => await traverseChains(fromChain, ENDPOINT_ID[toChain])}
      >
        {`Bridge to ${ChainName[toChain]}`}
      </div>
    );
  };

  return (
    <div className="flex bg-base-300 relative pb-10">
      {/* <DiamondIcon className="absolute top-24" />
        <CopyIcon className="absolute bottom-0 left-36" />
        <HareIcon className="absolute right-0 bottom-24" /> */}
      <div className="flex flex-col w-full mx-5 sm:mx-8 2xl:mx-20">
        <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-4 border-[#005AFF]">
          <div
            className={account ? `grid grid-cols-1 gap-4` : `mb-8`}
            style={{
              justifyContent: "center",
            }}
          >
            {/* Shows: Chain Selector */}
              <div
                className={"grid grid-cols-1 sm:text-md text-center w-full"}
                style={{
                  justifyContent: "center",
                  border: "4px solid",
                  borderRadius: "10px",
                  borderColor: "#005AFF", // BLUE
                  padding: "8px 4px",
                  fontWeight: "bold",
                }}
              >
                {/* @ts-ignore TODO */}
                <ChainSelector />
              </div>
          </div>
          {/* [√] CONNECTED : SHOW BALANCE */}
            <div
              className={"grid grid-cols-1 sm:text-md text-center w-full"}
              style={{
                // display: "flex",
                justifyContent: "center",
                border: "4px solid",
                borderRadius: "10px",
                borderColor: "#005AFF", // BLUE
                padding: "8px 4px",
                fontWeight: "bold",
              }}
            >
              <div>
                {`${!balance || Number(formattedBalance) == 0
                  ? "0"
                  : balance && Number(formattedBalance) > 0.01
                    ? formatNumber(Number(formattedBalance), false, true)
                    : "< 0.01"
                  }`}
              </div>
              <div> {`lz-fMULTI`} </div>
            </div>
          {/* @ts-ignore */}
          <TraverseButton
            account={account}
            amount={balance}
            toChain={toChain}
            fromChain={fromChain}
          />
        </div>
      </div>
    </div>
  );
};

export default BridgeInteraction;