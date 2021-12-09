// Connect Wallet
export const CONNECT_WALLET_REQUEST = '[Request] Connect Wallet'
export const CONNECT_WALLET_SUCCESS = '[Success] Connect Wallet'
export const CONNECT_WALLET_FAILURE = '[Failure] Connect Wallet'

export const GET_TOKEN_BALANCE_SUCCESS = '[Success] TOKEN BALANCE'
export const GET_TOKEN_BALANCE_FAILURE = '[Failure] TOKEN BALANCE'

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

export function getTokenBalanceFailure(error: Error) {
  return {
    type: GET_TOKEN_BALANCE_FAILURE,
    payload: {
      error
    }
  }
}

export type ConnectWalletRequestAction = ReturnType<typeof connectWalletRequest>
export type ConnectWalletSuccessAction = ReturnType<typeof connectWalletSuccess>
export type ConnectWalletFailureAction = ReturnType<typeof connectWalletFailure>
export type GetTokenBalanceSuccessAction = ReturnType<typeof getTokenBalanceSuccess>
