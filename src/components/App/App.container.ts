import { connect } from 'react-redux'
import {
  connectWalletRequest,
  sendTransferRequest
} from '../../modules/wallet/actions'
import {
  getAddress,
  getError,
  isConnected,
  isConnecting,
  getBalance,
  getReceiverAddress
} from '../../modules/wallet/selectors'
import { RootState } from '../../modules/types'
import {
  MapDispatch,
  MapDispatchProps,
  MapStateProps
} from './App.types'
import App from './App'

const mapState = (state: RootState): MapStateProps => ({
  address: getAddress(state),
  isConnected: isConnected(state),
  isConnecting: isConnecting(state),
  balance: getBalance(state),
  receiverAddress: getReceiverAddress(state),
  error: getError(state),
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onConnect: () => dispatch(connectWalletRequest()),
  onSendTransfer: (
    receiverAddress: string,
    amount: string
  ) => dispatch(sendTransferRequest(receiverAddress, amount)),
})

export default connect(mapState, mapDispatch)(App)
