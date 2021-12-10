import { ethers } from 'ethers'

export type WalletState = {
  address: string | null
  isConnecting: boolean
  balance: string | null
  error: string | null
  receiverAddress: string | null
  loading: boolean
}

export type WindowWithEthereum = Window & {
  ethereum: ethers.providers.ExternalProvider
}
