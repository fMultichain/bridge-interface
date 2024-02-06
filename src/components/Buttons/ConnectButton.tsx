import { BLUE } from '@/config'
import { useWeb3Modal } from '@web3modal/ethers/react'

export default function ConnectButton() {
  const { open } = useWeb3Modal()

  return (
    <div
      className='flex flex-cols-1 justify-space-between text-center w-full'
      style={{
        display: 'flex',
        justifyItems: 'space-between',
        gap: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        border: '4px solid',
        borderRadius: '5px',
        padding: '20px',
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