import {
  ABI_ENDPOINT,
  ABI_LZFMULTI,
  ENDPOINT_ADDRESS,
  LZFMULTI_ADDRESS,
} from "@/config";
import Web3 from "web3";

export default async function traverseChains(amount, fromChain, endpointId) {
  // web3
  const web3 = new Web3(window.ethereum);

  // gets: account of the connected wallet (refresh)
  const accounts = await web3.eth.getAccounts();
  const selectedAccount = accounts[0];

  // [√] set: token contract
  const tokenContract = await new web3.eth.Contract(
    ABI_LZFMULTI,
    LZFMULTI_ADDRESS[fromChain],
    ENDPOINT_ADDRESS[fromChain]
  );
  // [√] sets: endpoint contract
  const endpointContract = await new web3.eth.Contract(
    ABI_ENDPOINT,
    ENDPOINT_ADDRESS[fromChain]
  );

  // const balance = await tokenContract.methods.balanceOf(accounts[0]).call();
  // console.log("balance: %s", balance);
  console.log("amount: %s", amount);

  // bytes to send
  const payload = web3.eth.abi.encodeParameters(
    ["address", "uint256"],
    [selectedAccount, amount]
  );
  console.log("The payload is", payload);
  const VERSION = 1;

  // [√] gets: current LZ gas.
  const number = await tokenContract.methods.currentLZGas().call();
  if (!number) {
    console.log(
      "currentLZGas().call() from",
      LZFMULTI_ADDRESS[fromChain],
      "failed"
    );
  }
  // [√] gets: adapter parameters.
  console.log("Current LZ Gas from contract is", number);
  const parameters = web3.utils.encodePacked(
    { value: VERSION, type: "uint16" },
    { value: number, type: "uint256" }
  );
  console.log("Parameters: %s", parameters);
  
  // [√] gets: payable amount to send
  const payableAmount = await endpointContract.methods
    .estimateFees(
      endpointId,
      LZFMULTI_ADDRESS[fromChain],
      payload,
      false,
      parameters
    )
    .call();
  if (!payableAmount) {
    console.log(
      "estimateFees().call() from",
      ENDPOINT_ADDRESS[fromChain],
      "failed"
    );
  } else {
    console.log("Estimated fees are", payableAmount);
  }

  // [√] gets: gas estimate
  let estimatedGas;
  await web3.eth.getGasPrice().then((result) => {
    console.log("Estimated gas is", web3.utils.fromWei(result, "ether"));
    estimatedGas = result;
  });

  // the transaction
  // tokenContract = await new web3.eth.Contract(ABI_ERC20, tokenAddress);
  const value = await tokenContract.methods
    .traverseChains(endpointId, amount)
    .send({
      from: selectedAccount,
      gasPrice: estimatedGas,
      value: payableAmount[0],
    })
    .on("transactionHash", function (hash) {
      console.log(hash);
    });
  if (!value) {
    console.log("traverseChains().send() from", selectedAccount, "failed");
  }
}
