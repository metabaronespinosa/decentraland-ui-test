// Connect Wallet
export const CONNECT_WALLET_REQUEST = '[Request] Connect Wallet'
export const CONNECT_WALLET_SUCCESS = '[Success] Connect Wallet'
export const CONNECT_WALLET_FAILURE = '[Failure] Connect Wallet'

export const GET_TOKEN_BALANCE_SUCCESS = '[Success] Token Balance'
export const GET_TOKEN_BALANCE_FAILURE = '[Failure] Token Balance'

export const SEND_TRANSFER_REQUEST = '[Request] Send Transfer'
export const SEND_TRANSFER_SUCCESS = '[Success] Send Transfer'
export const SEND_TRANSFER_FAILURE = '[Failure] Send Transfer'

export function connectWalletRequest() {
  return {
    type: CONNECT_WALLET_REQUEST,
    payload: {},
  }
}

export function connectWalletSuccess(address: string) {
  return {
    type: CONNECT_WALLET_SUCCESS,
    payload: {
      address,
    },
  }
}

export function connectWalletFailure(error: string) {
  return {
    type: CONNECT_WALLET_FAILURE,
    payload: {
      error,
    },
  }
}

export function getTokenBalanceSuccess(balance: string) {
  return {
    type: GET_TOKEN_BALANCE_SUCCESS,
    payload: {
      balance
    }
  }
}

export function getTokenBalanceFailure(getTokenError: Error) {
  return {
    type: GET_TOKEN_BALANCE_FAILURE,
    payload: {
      getTokenError
    }
  }
}

export function sendTransferRequest(receiverAddress: string, amount: string) {
  return {
    type: SEND_TRANSFER_REQUEST,
    payload: {
      receiverAddress,
      amount
    }
  }
}

export function sendTransferSuccess() {
  return {
    type: SEND_TRANSFER_SUCCESS
  }
}

export function sendTransferFailure(error: Error) {
  return {
    type: SEND_TRANSFER_FAILURE,
    payload: {
      error
    }
  }
}

export type ConnectWalletRequestAction = ReturnType<typeof connectWalletRequest>
export type ConnectWalletSuccessAction = ReturnType<typeof connectWalletSuccess>
export type ConnectWalletFailureAction = ReturnType<typeof connectWalletFailure>
export type GetTokenBalanceSuccessAction = ReturnType<typeof getTokenBalanceSuccess>
export type SendTransferRequestAction = ReturnType<typeof sendTransferRequest>
