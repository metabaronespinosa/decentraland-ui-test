import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom'

import TransferForm from './TransferForm'

const fn = () => jest.fn()

test('Render Transfer Form', () => {
  render(
    <Router>
      <TransferForm onSendTransfer={fn} loading={false} error={null} />
    </Router>
  )

  expect(screen.getByText('Send')).toBeDisabled()

  fireEvent.change(screen.getByPlaceholderText(/\$0/), { target: { value: '1' } })
  fireEvent.change(screen.getByPlaceholderText(/0x.../), { target: { value: '1' } })

  expect(screen.getByText('Send')).not.toBeDisabled()
})
