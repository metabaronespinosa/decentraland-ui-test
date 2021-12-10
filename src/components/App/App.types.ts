import { AnyAction, Dispatch } from 'redux'
import {
  ConnectWalletRequestAction,
  SendTransferRequestAction
} from '../../modules/wallet/actions'

export type Props = {
  address: string
  isConnected: boolean
  isConnecting: boolean
  balance: string
  error: string | null
  receiverAddress: string | null
  onConnect: () => void
  onSendTransfer: (r: string, a: string) => void
}

export type MapStateProps = Pick<
  Props,
  'address' |
  'isConnected' |
  'isConnecting' |
  'error' |
  'balance' |
  'receiverAddress'
>
export type MapDispatchProps = Pick<Props, 'onConnect' | 'onSendTransfer'>
export type MapDispatch = Dispatch<ConnectWalletRequestAction | SendTransferRequestAction | AnyAction>
