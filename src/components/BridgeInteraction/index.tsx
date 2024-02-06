import { useState } from "react";

import {
  BLUE,
  ChainId,
  ChainName,
  ENDPOINT_ID,
  LZFMULTI_ADDRESS,
} from "config/constants";
import useActiveWeb3React from "@/hooks/useActiveWeb3React";
import traverseChains from "@/functions/traverseChains";
import { NextPage } from "next";
import { useTokenBalance } from "@/hooks/useTokenBalance";
import { formatNumber } from "@/functions/formatNumber";

async function useGetBalance(account: any, chainId: ChainId) {
  const balance = await useTokenBalance(account, LZFMULTI_ADDRESS[chainId]);
  console.log('balance = ' + balance)
  // setBalance(balance)
  // setTriedBalance(true)
  return balance
}

const BridgeInteraction: NextPage = () => {
  const { account, chainId } = useActiveWeb3React();
  
  // console.log('account: %s', account)
  const fromChain: ChainId = chainId as ChainId;
  const toChains = [
    ChainId.FANTOM,
    ChainId.BASE,
    ChainId.ARBITRUM,
    ChainId.AVALANCHE,
  ].filter((chain: ChainId) => chain !== fromChain);
  const [toChain, setToChain] = useState(toChains[0]);
  const [triedBalance, setTriedBalance] = useState(false)
  const [balance, setBalance] = useState('0');
  const [inputAmount, setAmount] = useState(0);
  const chains = toChains.filter((chain: ChainId) => chain !== toChain);

  useGetBalance(account, fromChain).then((balance) => {
    if (account && !triedBalance) {
      setTriedBalance(true)
      setBalance(balance);
    } else return
  })

  {/* [√] SHOW BALANCE */ }
  const NumericInput = () => {
    const handleInput = (inputAmount: any) => {
      setAmount(inputAmount)
      console.log('inputAmount: %s', inputAmount.toString())
    }

    const handleMax = () => {
      setAmount(Number(balance) / 1E18)
      console.log('max: %s', balance.toString())
    }

    return (
      <div
        className={"grid grid-cols-1 sm:text-md text-center w-full"}
        style={{
          // display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            border: "4px solid",
            borderRadius: "10px",
            padding: "8px 4px",
            fontWeight: "bold",
            backgroundColor: BLUE, // BLUE
            color: "#FFFFFF",
          }}
        >
          <input
            value={inputAmount}
            type="number"
            placeholder="Enter Amount"
            onChange={(e) => handleInput(e.target.value)}
            pattern="^[0-9]*[.,]?[0-9]*$"
            style={{
              display: "flex",
              justifyContent: "center",
              border: "4px solid",
              borderRadius: "10px",
              padding: "8px 4px",
              fontWeight: "bold",
              backgroundColor: BLUE, // BLUE
              color: "#FFFFFF",
            }}
          />
          <div
            style={{
              backgroundColor: BLUE, // BLUE
              border: '2px solid',
              borderRadius: "24px",
              color: "#FFFFFF",
              margin: "4px",
              paddingTop: '0.25rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
            }}
            onClick={() => handleMax()}
          >
            {'MAX'}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            color: '#FFFFFF',
            marginTop: '12px',
          }}
        >
          {`Balance: ${!balance || Number(balance) == 0
            ? "0"
            : balance && Number(balance) > 0.01
              ? formatNumber(Number(balance) / 1E18, false, true)
              : "< 0.01"
            } lz-fMULTI`}
        </div>
      </div>
    )
  }

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
              backgroundColor: BLUE, // BLUE
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
                  backgroundColor: BLUE, // BLUE
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

  // // async function TraverseButton(inputAmount) {
  // const TraverseButton = (inputAmount) => {
  //   return (

  //   );
  // };

  return (
    <div className=""
      style={{
        display: "grid",
        width: "100%",
        justifyContent: "center",
        backgroundColor: BLUE, // BLUE
        borderColor: "#FFFFFF",
        borderWidth: "4px",
        margin: "2rem 0",
      }}
    >
      {/* <DiamondIcon className="absolute top-24" />
        <CopyIcon className="absolute bottom-0 left-36" />
        <HareIcon className="absolute right-0 bottom-24" /> */}
      <div className="flex flex-col w-full mx-5 sm:mx-8 2xl:mx-20">
        <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-4 border-[#005AFF]">
          <div
            className={account ? `grid grid-cols-1 gap-4` : `mb-8`}
            style={{
              justifyContent: "center",
              marginTop: "2rem",
              marginBottom: "4rem",
            }}
          >
            {/* Shows: Chain Selector */}
            <div
              className={"grid grid-cols-1 text-center w-full"}
              style={{
                display: 'grid',
                justifyContent: "center",
                border: "4px solid",
                borderRadius: "10px",
                borderColor: "#FFFFFF", // BLUE
                padding: "8px 4px",
                fontWeight: "bold",
                backgroundColor: BLUE, // BLUE
                color: "white",
                fontSize: "18px",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              {`Destination Chain`}
              {/* @ts-ignore TODO */}
              <ChainSelector />
            </div>
            {/* @ts-ignore TODO */}
            <NumericInput />
            <br />
            {/* @ts-ignore */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                border: "4px solid",
                borderRadius: "10px",
                padding: "8px 6px",
                // paddingTop: "16px",
                fontSize: "21px",
                fontWeight: "bold",
                backgroundColor: BLUE, // BLUE
                color: "#FFFFFF",
              }}
              // onClick={() => handleTraverse(Number(inputAmount), toChain, fromChain)}
              // onClick={async () => await handleTraverseThis(account, Number(inputAmount), toChain, fromChain)}
              onClick={async () =>
                await traverseChains(Number(inputAmount), fromChain, ENDPOINT_ID[toChain])
              }
            >
              {`Bridge ${formatNumber(inputAmount)} to ${ChainName[toChain]}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridgeInteraction;
