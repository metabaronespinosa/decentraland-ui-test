import React from 'react'
import {
  Center,
  Footer,
  Navbar,
  Page,
} from 'decentraland-ui'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Props } from './App.types'
import { WalletDashboard } from '../WalletDashboard'
import { TransferForm } from '../TransferForm'

import './App.css'


const App: React.FC<Props> = ({
  address,
  isConnected,
  onConnect,
  onSendTransfer,
  isConnecting,
  balance,
  loading,
  error
}) => {
  return <>
    <Navbar />
    <Page className="App">
      <Center>
        <Router>
          <Routes>
          <Route path='/transfer' element={
            <TransferForm
              onSendTransfer={onSendTransfer}
              loading={loading}
              error={error}
            />} />
            <Route path='/' element={
              <WalletDashboard
                address={address}
                isConnected={isConnected}
                onConnect={onConnect}
                isConnecting={isConnecting}
                balance={balance}
                error={error}
              />
            }/>
          </Routes>
        </Router>
      </Center>
    </Page>
    <Footer />
  </>
}

export default App
