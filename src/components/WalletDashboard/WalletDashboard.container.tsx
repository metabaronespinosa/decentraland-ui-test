import {
  Button,
  Card,
  Header
} from 'decentraland-ui'

import { Props } from '../App/App.types'

const WalletDashboard = ({
  isConnected,
  onConnect,
  isConnecting,
  address,
  error
}: Props) => {
  return <>
    {!isConnected ? (
    <>
        <Button primary onClick={onConnect} loading={isConnecting}>
        Connect
        </Button>
        {error ? <p className="error">{error}</p> : null}
    </>
    ) : (
    <Card>
        <Header>Wallet</Header>
        <p>
        <strong>Address:</strong>&nbsp;
        {address.slice(0, 6) + '...' + address.slice(-4)}
        </p>
    </Card>
    )}
  </>
}

export default WalletDashboard
