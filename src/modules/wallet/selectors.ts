import { RootState } from '../types'

export const getState = (state: RootState) => state.wallet
export const getAddress = (state: RootState) => getState(state).address || ''
export const isConnected = (state: RootState) => !!getAddress(state)
export const isConnecting = (state: RootState) => getState(state).isConnecting
export const getBalance = (state: RootState) => getState(state).balance || ''
export const getReceiverAddress = (state: RootState) => getState(state).receiverAddress || ''
export const getLoading = (state: RootState) => getState(state).loading
export const getError = (state: RootState) => getState(state).error
