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

export const BridgeInteraction = () => {
  const { account, chainId } = useActiveWeb3React();
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
  const formattedBalance = 0
  const balance = Number(formattedBalance) * 1e18;

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

  // const handleTraverseThis = async (account: any, amount: number, toChain: ChainId, fromChain: ChainId) => {
  //   const web3 = new Web3(window.ethereum);

  //   // Get account of the connected wallet (refresh)
  //   // console.log('accounts: %s', accounts[0]);
  //   console.log("account: %s", account);

  //   // set contracts
  //   const endpointContract = await new web3.eth.Contract(ABI_ENDPOINT, ENDPOINT_ADDRESS[fromChain]);
  //   console.log("Endpoint Contract: %s", ENDPOINT_ADDRESS[fromChain]);
  //   // todo: verify LZFMULTI_ADDRESS[fromChain] is correct.
  //   const tokenContract = await new web3.eth.Contract(ABI_LZFMULTI, LZFMULTI_ADDRESS[fromChain]);

  //   // bytes to send
  //   const payload = web3.eth.abi.encodeParameters(["address", "uint256"], [account, amount]);
  //   console.log("The payload is", payload);
  //   const version = 1;

  //   console.log("destination chain: %s", toChain);

  //   // gas required to do transaction on destination chain
  //   const gas = 250000; // (await tokenContract.methods.currentLZGas().call()) ?? 250000;
  //   if (!gas) {
  //     console.log("currentLZGas().call() from", LZFMULTI_ADDRESS[fromChain], "failed");
  //   }
  //   console.log("Current LZ Gas from contract is", gas);

  //   // this is the adapter settings for L0
  //   const adapterParams = web3.utils.encodePacked(
  //     { value: version, type: "uint16" },
  //     { value: gas, type: "uint256" },
  //   );
  //   console.log("Adapter Params is", adapterParams);

  //   // this is the payable amount to send
  //   const amountToSend = await endpointContract.methods
  //     .estimateFees(ENDPOINT_ID[fromChain], LZFMULTI_ADDRESS[fromChain], payload, false, adapterParams)
  //     .call();

  //   console.log("amountToSend is %s", amountToSend);

  //   if (!amountToSend) {
  //     console.log("estimateFees().call() from", ENDPOINT_ADDRESS[fromChain], "failed");
  //   }
  //   console.log("Estimated fees are", amountToSend);

  //   // current gas estimate
  //   let estimatedGas;
  //   await web3.eth.getGasPrice().then((result: any) => {
  //     console.log("Estimated gas is", web3.utils.fromWei(result, "ether"));
  //     estimatedGas = result;
  //   });

  //   // the transaction
  //   const value = await tokenContract.methods
  //     .traverseChains(ENDPOINT_ID[fromChain], amount)
  //     .send({
  //       from: account,
  //       gasPrice: estimatedGas ? estimatedGas : "0",
  //       gas: gas ? web3.utils.fromWei(gas, "wei") : "0",
  //       value: amountToSend ? amountToSend[0] : "0",
  //     })
  //     .on("transactionHash", function (hash: any) {
  //       console.log(hash);
  //     });
  //   if (!value) {
  //     console.log("traverseChains().send() from", account, "failed");
  //   }
  // };


  // async function TraverseButton(amount) {
  const TraverseButton = (amount: string) => {
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
        onClick={async () => await traverseChains(amount, fromChain, ENDPOINT_ID[toChain])}
      // className={className}
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
            {/* [√] DISCONNECTED : SHOW DISCONNECTED */}
            {!account && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  border: "4px solid",
                  borderRadius: "10px",
                  borderColor: "#FF0000", // RED
                  padding: "2px 16px",
                  // marginTop: "32px",
                  fontSize: "21px",
                  animation: "pulse 2s infinite",
                }}
              >
                {`Disconnected`}
              </div>
            )}

            {/* Shows: Chain Selector */}
            {account && (
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
            )}
            {/* {account && Number(balance) > 0 && <BridgeButton balance={JSBI.BigInt(Number(balance)).toString()} />} */}
          </div>
          {/* [√] CONNECTED : SHOW BALANCE */}
          {account && (
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
          )}
          {/* @ts-ignore */}
          <TraverseButton
            account={account}
            amount={balance.toString()}
            toChain={toChain}
            fromChain={fromChain}
          />
        </div>
      </div>
    </div>
  );
};
