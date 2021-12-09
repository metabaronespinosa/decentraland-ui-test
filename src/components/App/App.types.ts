import { AnyAction, Dispatch } from 'redux'
import { ConnectWalletRequestAction } from '../../modules/wallet/actions'

export type Props = {
  address: string
  isConnected: boolean
  isConnecting: boolean
  balance: string,
  error: string | null
  onConnect: () => void
}

export type MapStateProps = Pick<
  Props,
  'address' | 'isConnected' | 'isConnecting' | 'error' | 'balance'
>
export type MapDispatchProps = Pick<Props, 'onConnect'>
export type MapDispatch = Dispatch<ConnectWalletRequestAction | AnyAction>
