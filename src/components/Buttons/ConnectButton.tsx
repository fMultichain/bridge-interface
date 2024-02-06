import { BLUE } from '@/config'
import { useWeb3Modal } from '@web3modal/ethers/react'

export default function ConnectButton() {
  const { open } = useWeb3Modal()

  return (
    <div
      // className='flex flex-cols-1 text-center w-full'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        margin: '0 0 0 0',
        backgroundColor: BLUE,
      }}
    >
      <button 
        onClick={() => open()}
      >
        Connect Wallet
      </button>
      <button 
        onClick={() => open({ view: 'Networks' })}
      >
          Select Chain
      </button>
    </div>
  )
}