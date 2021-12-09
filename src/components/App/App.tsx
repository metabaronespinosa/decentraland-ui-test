import React from 'react'
import {
  Center,
  Footer,
  Navbar,
  Page,
} from 'decentraland-ui'
import { Props } from './App.types'
import './App.css'

import { WalletDashboard } from '../WalletDashboard'

const App: React.FC<Props> = ({
  address,
  isConnected,
  onConnect,
  isConnecting,
  error
}) => {
  return (
    <>
      <Navbar />
      <Page className="App">
        <Center>
          <WalletDashboard
            address={address}
            isConnected={isConnected}
            onConnect={onConnect}
            isConnecting={isConnecting}
            error={error}
          />
        </Center>
      </Page>
      <Footer />
    </>
  )
}

export default App
