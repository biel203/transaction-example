import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack'

import validateSchema from 'utils/validateSchema'

import * as S from './styled'
import schema from './schema'
import { TransactionForm } from './Form'
import { FormTypes } from 'pages/Transaction/contracts'
import { transactions as service } from 'services/mirror-api'

const sendTransaction = async (formValue: FormTypes) => service.sendTransactions(formValue)

const Transaction = () => {
  const history = useHistory()

  const [errors, setErrors] = useState<FormTypes>({})

  const goBack = () => {
    history.replace('/')
  }

  const onSubmitForm = async (form: FormTypes) => {
    // event.preventDefault()

    try {
      const result = await validateSchema(schema, form)
      setErrors(result)

      if (Object.keys(result).length <= 0) {
        await sendTransaction(form)
        toast.success('Transação criada com sucesso!')
      }
    } catch (error) {
      toast.error('Ops! Parece que ocorreu algum problema :(')
    }

    goBack()
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Back role="button" onClick={goBack}>
          <ArrowBack size={24} />
        </S.Back>
        <S.Title>Nova transação</S.Title>
      </S.Header>

      <TransactionForm errors={errors} onSubmitForm={onSubmitForm}/>
    </S.Wrapper>
  )
}

export default Transaction
export { Transaction }
