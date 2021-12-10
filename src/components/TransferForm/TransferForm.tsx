import React, { useEffect, useState, useRef } from 'react'
import {
  Close,
  Button,
  Field,
  Modal
} from 'decentraland-ui'
import { useNavigate } from 'react-router-dom'

import { Props } from '../App/App.types'

import './styles.css'

const TransferForm = ({
  onSendTransfer,
  loading,
  error
}: Pick<Props, 'onSendTransfer' | 'loading' | 'error'>) => {
  const [formValid, setFormValid] = useState(false)
  const [amount, setAmount] = useState<string | null>(null)
  const [address, setAddress] = useState<string | null>(null)
  const prevLoading = useRef(false)

  const navigate = useNavigate()

  const handleAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)
  const handleAddressValue = (e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)

  const sendTransfer = () =>
    (amount?.length && address?.length) ? onSendTransfer(address, amount) : null

  useEffect(() => {
    // Ideally these values should be validated by Regex
    if (amount?.length && address?.length) setFormValid(true)
  }, [amount, address])

  useEffect(() => {
    if (
      !loading &&
      prevLoading.current &&
      error === null
    ) navigate('/') // Better handling for this could be a 'transferSuccessfull' property
  }, [loading, error, navigate])

  useEffect(() => {
    prevLoading.current = loading
  })

  return <>
    <Modal
      open
      size='tiny'
      onClose={() => navigate('/')}
      closeIcon={<Close />}
    >
      <Modal.Header className='modal-header'>Transfer</Modal.Header>
      <Modal.Content className='modal-subtitle'>Send tokens to an account</Modal.Content>
      <Modal.Content>
        <Field onChange={handleAmountValue} label='Amount' placeholder='$0' />
        <Field onChange={handleAddressValue} label='Address' placeholder='0x...' type='address' />
      </Modal.Content>
      <Modal.Actions>
        <Button
          primary
          disabled={!formValid}
          onClick={sendTransfer}
          loading={loading}
        >
          Send
        </Button>
      </Modal.Actions>
    </Modal>
  </>
}

export default TransferForm
