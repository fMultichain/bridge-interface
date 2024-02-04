import Web3 from "web3";

export const getTokenBalance = async (account, ABI, tokenAddress, chainId) => {
  // web3
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts()
  account = accounts[0]

  // [√] set: token contract
  const tokenContract = await new web3.eth.Contract(ABI, tokenAddress);

  // this is the payable amount to send
  const balance = await tokenContract.methods.balanceOf(account).call();
  // console.log("balance: %s", balance);

  return balance;
};

export default getTokenBalance;
