import { AnyAction } from 'redux'
import {
  ConnectWalletFailureAction,
  ConnectWalletSuccessAction,
  GetTokenBalanceSuccessAction,
  SendTransferRequestAction,
  CONNECT_WALLET_FAILURE,
  CONNECT_WALLET_REQUEST,
  CONNECT_WALLET_SUCCESS,
  GET_TOKEN_BALANCE_SUCCESS,
  SEND_TRANSFER_REQUEST,
  SEND_TRANSFER_SUCCESS,
  SEND_TRANSFER_FAILURE
} from './actions'
import { WalletState } from './types'

const INITIAL_STATE: WalletState = {
  address: null,
  isConnecting: false,
  error: null,
  balance: null,
  receiverAddress: null
}

export function walletReducer(
  state: WalletState = INITIAL_STATE,
  action: AnyAction
): WalletState {
  switch (action.type) {
    case CONNECT_WALLET_REQUEST: {
      return {
        ...state,
        isConnecting: true,
        error: null,
      }
    }

    case CONNECT_WALLET_SUCCESS: {
      const { address } =
        action.payload as ConnectWalletSuccessAction['payload']
      return {
        ...state,
        isConnecting: false,
        address,
        error: null,
      }
    }

    case CONNECT_WALLET_FAILURE: {
      const { error } = action.payload as ConnectWalletFailureAction['payload']
      return {
        ...state,
        isConnecting: false,
        error,
      }
    }

    case GET_TOKEN_BALANCE_SUCCESS: {
      const { balance } =
        action.payload as GetTokenBalanceSuccessAction['payload']
      return {
        ...state,
        balance
      }
    }

    // Actions related to transfer could live outside in another module, however will leave it here since it is a small app test
    case SEND_TRANSFER_REQUEST: {
      const { receiverAddress } =
        action.payload as SendTransferRequestAction['payload']
      return {
        ...state,
        receiverAddress
      }
    }

    case SEND_TRANSFER_SUCCESS: {
      return {
        ...state,
        receiverAddress: null
      }
    }

    case SEND_TRANSFER_FAILURE: {
      return {
        ...state,
        error: null
      }
    }

    default:
      return state
  }
}
