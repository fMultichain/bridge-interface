import { ChainName } from '@/config'
import formatAddress from '@/functions/formatAddress'
import { useWeb3Modal } from '@web3modal/ethers/react'
import {  useWeb3ModalAccount } from '@web3modal/ethers/react' // useWeb3ModalProvider,
// import { BrowserProvider, Contract, formatUnits } from 'ethers'

export default function ConnectButton() {
  const { address, chainId } = useWeb3ModalAccount()
  const { open } = useWeb3Modal()

  return (
    <div
      // className='sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2'
      // className={'sticky absolute top-0'}
      // style={{
      //   display: 'flex',
      //   flexDirection: 'row',
      //   justifyContent: 'space-between',
      //   padding: '20px',
      //   border: '1px solid',
      //   margin: '0 0 0 0',
      //   backgroundColor: BLUE,
      // }}
    >
      <button 
        onClick={() => open()}
      >
        {address ? formatAddress(address?.toString()) : 'Connect Wallet'}
      </button>
      <button 
        onClick={() => open({ view: 'Networks' })}
      >
        {chainId ? ChainName[chainId] : 'Select Chain'}
      </button>
    </div>
  )
}