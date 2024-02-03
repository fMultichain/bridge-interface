import { useState } from "react";
// import { CopyIcon } from "./assets/CopyIcon";
// import { DiamondIcon } from "./assets/DiamondIcon";
// import { HareIcon } from "./assets/HareIcon";
import { JSBI } from "@sushiswap/core-sdk";
// import { readContract, writeContract } from "@wagmi/core";
// import { getPayload } from "~~/functions/getPayload";
// import { getParameters } from "~~/functions/getParameters";
// import { encodeAbiParameters, encodePacked, parseGwei } from "viem";
// import { useAccount, useChainId } from "wagmi";
// useFeeData
// import { encodeAbiParameters, encodePacked } from "viem";
// import { encodeFunctionData } from 'viem'
// import { parseEther } from 'viem'
// import Web3 from "web3";
import {
    ABI_ENDPOINT,
    ABI_LZFMULTI,
    ChainId,
    ChainName,
    ENDPOINT_ADDRESS,
    ENDPOINT_ID,
    LZFMULTI_ADDRESS,
} from "config/constants";
import { formatNumber } from "functions/formatNumber";
// import { getBridgeData } from "~~/functions/getBridgeData";
import { useTokenBalance } from "hooks/useTokenBalance"
import Web3 from "web3";
import useActiveWeb3React from "@/hooks/useActiveWeb3React";

// import getGasPrice from "viem";
// import { wagmiConfig } from "~~/services/web3/wagmiConfig";

// import { traverseThis } from "~~/functions/traverseChains";
// import { ChainMap } from "~~/types/ChainMap";
// import { wagmiConfig } from "~~/services/web3/wagmiConfig";

type TraverseProps = {
    account: any;
    amount: string | number;
    toChain: ChainId;
    fromChain: ChainId;
    className?: string;
};

export const BridgeInteraction = () => {
    const { account, chainId } = useActiveWeb3React()
    const fromChain: ChainId = chainId as ChainId;
    const toChains = [ChainId.FANTOM, ChainId.BASE, ChainId.ARBITRUM, ChainId.AVALANCHE].filter(
        (chain: ChainId) => chain !== fromChain,
    );
    const [toChain, setToChain] = useState(toChains[0]);
    const chains = toChains.filter((chain: ChainId) => chain !== toChain);
    const formattedBalance = 0 // useTokenBalance(account, LZFMULTI_ADDRESS[fromChain]);

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

    const handleTraverseThis = async (amount: number, toChain: ChainId, fromChain: ChainId) => {
        // web3
        // todo: verify provider works.
        // const provider = new Web3(Web3.givenProvider);
        const provider = new Web3(window.ethereum);
        const web3 = new Web3(provider);

        // Get account of the connected wallet (refresh)
        const accounts = await web3.eth.getAccounts();
        const selectedAccount = accounts[0];
    
        // set contracts
        const endpointContract = await new web3.eth.Contract(ABI_ENDPOINT, ENDPOINT_ADDRESS[toChain]);
        // todo: verify LZFMULTI_ADDRESS[toChain] is correct.
        const tokenContract = await new web3.eth.Contract(ABI_LZFMULTI, LZFMULTI_ADDRESS[toChain]);

        // bytes to send
        // const payload = web3.eth.abi.encodeParameters(["address", "uint256"], [selectedAccount, Number(amount)]);
        const payload = web3.eth.abi.encodeParameters(["address", "uint256"], [selectedAccount, Number(0)]);
        console.log("The payload is", payload);
        const version = 1;

        // gas required to do transaction on destination chain.
        const gas = await tokenContract.methods.currentLZGas().call();
        if (!gas) {
          console.log("currentLZGas().call() from", LZFMULTI_ADDRESS[fromChain], "failed");
        }
        console.log("Current LZ Gas from contract is", gas);

        // this is the adapter settings for L0
        const adapterParams = web3.utils.encodePacked({ value: version, type: "uint16" }, { value: gas, type: "uint256" });
        console.log("Adapter Params is", adapterParams);

        // this is the payable amount to send
        const fees = await endpointContract.methods
            .estimateFees(ENDPOINT_ID[toChain], LZFMULTI_ADDRESS[toChain], payload, false, adapterParams)
            .call();
        if (!fees) {
            console.log("estimateFees().call() from", ENDPOINT_ADDRESS[toChain], "failed");
        }
        console.log("Estimated fees are", fees);

        // current gas estimate
        let estimatedGas;
        await web3.eth.getGasPrice().then((result: any) => {
            console.log("Estimated gas is", web3.utils.fromWei(result, "ether"));
            estimatedGas = result;
        });

        // the transaction
        const value = await tokenContract.methods
            .traverseChains(ENDPOINT_ID[fromChain], amount)
            .send({
                from: account,
                gasPrice: estimatedGas ? estimatedGas : "0",
                gas: gas ? web3.utils.fromWei(gas.toString(), "wei") : "0",
                value: fees ? fees[0] : "0",
            })
            .on("transactionHash", function (hash: any) {
                console.log(hash);
            });
        if (!value) {
            console.log("traverseChains().send() from", account, "failed");
        }
};

    // async function TraverseButton(amount) {
        const TraverseButton = (amount: number) => {


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
            onClick={() => handleTraverseThis(Number(amount), toChain, fromChain)}
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
                    amount={balance}
                    toChain={toChain}
                    fromChain={fromChain}
                />
            </div>
        </div>
    </div>
);
};