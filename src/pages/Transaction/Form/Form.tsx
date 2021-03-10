import React, { useState, FormEvent } from 'react'
import * as mask from 'utils/mask'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styled'
import { FormTypes } from 'pages/Transaction/contracts'

interface Props {
  onSubmitForm: (form: FormTypes) => Promise<void>,
  errors: FormTypes
}

const TransactionForm: React.FC<Props> = ({ onSubmitForm, errors }) => {

  const [form, setForm] = useState({
    amount: '',
    credit_card_cvv: '',
    credit_card_holder_name: '',
    credit_card_expiration_date: '',
    credit_card_number: '',
    buyer_document: ''
  })

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    onSubmitForm(form)
  }

  return (
    <S.Form onSubmit={handleSubmitForm}>
      <TextField
        name="credit_card_holder_name"
        placeholder="Nome da pessoa compradora"
        value={form.credit_card_holder_name}
        error={errors.credit_card_holder_name}
        required
        onChange={(event) =>
          setForm({ ...form, credit_card_holder_name: event.target.value })
        }
      />
      <TextField
        name="buyer_document"
        placeholder="CPF"
        value={form.buyer_document}
        error={errors.buyer_document}
        required
        onChange={(event) =>
          setForm({ ...form, buyer_document: mask.cpf(event.target.value) })
        } />
      <TextField
        name="credit_card_number"
        placeholder="Nº do cartão"
        value={form.credit_card_number}
        error={errors.credit_card_number}
        required
        onChange={(event) =>
          setForm({ ...form, credit_card_number: mask.creditCardNumber(event.target.value) })
        } />
      <S.Row>
        <TextField
          name="credit_card_expiration_date"
          placeholder="Data de expiração"
          value={form.credit_card_expiration_date}
          error={errors.credit_card_expiration_date}
          required
          onChange={(event) =>
            setForm({ ...form, credit_card_expiration_date: mask.creditCardExpirationDate(event.target.value) })
          } />
        <TextField
          name="credit_card_cvv"
          placeholder="CVV"
          value={form.credit_card_cvv}
          error={errors.credit_card_cvv}
          required
          onChange={(event) =>
            setForm({ ...form, credit_card_cvv: mask.creditCardCvv(event.target.value) })
          } />
      </S.Row>
      <TextField
        name="amount"
        placeholder="Valor da transação"
        value={form.amount}
        error={errors.amount}
        required
        onChange={(event) =>
          setForm({ ...form, amount: mask.currency(event.target.value) })
        } />

      <Button>Criar transação</Button>
    </S.Form>
  )
}

export default TransactionForm
export { TransactionForm }
