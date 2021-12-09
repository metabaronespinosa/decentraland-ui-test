import {
  Button,
  Card,
  Header
} from 'decentraland-ui'
import { Link } from 'react-router-dom'

import { Props } from '../App/App.types'

const maskWalletAddress = (address: string) =>
  address.slice(0, 6) + '...' + address.slice(-4)

const WalletDashboard = ({
  isConnected,
  onConnect,
  isConnecting,
  address,
  balance,
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
        {maskWalletAddress(address)}
      </p>
      <p>
        <strong>Balance:</strong>&nbsp;
        {balance}
        <Link to='/transfer'>
          <Button basic>Transfer</Button>
        </Link>
      </p>
    </Card>
    )}
  </>
}

export default WalletDashboard
