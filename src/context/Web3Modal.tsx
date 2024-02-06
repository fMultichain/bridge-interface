'use client'

import { chains } from '@/config'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID ?? ''

// 3. Create modal
const metadata = {
  name: 'My Website',
  title: 'lz-fMULTI Bridge',
  description: 'fMULTI Bridge Services',
  url: 'https://bridge-interface-nu.vercel.app/', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: chains,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

// @ts-ignore
export function Web3ModalProvider({ children }) {
  return children
}