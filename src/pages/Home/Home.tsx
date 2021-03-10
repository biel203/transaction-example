import { useState, useEffect } from 'react'
import { PlusCircle } from '@styled-icons/boxicons-solid/PlusCircle'

import { formatToCurrency } from 'utils/formatToCurrency'

import Button from 'components/Button'
import TransactionItem from 'components/TransactionItem'
import * as S from './styled'

import { Transaction } from 'pages/Transaction/contracts'
import { transactions as service } from 'services/mirror-api'

const getTransactions = async () => {
  const transactions: Transaction[] = await service.getTransactions()
  // const transactions: Transaction[] = await fetch('http://localhost:3000/transactions').then(res => res.json())
  return transactions
}

const sumTransactions = (transactions: Transaction[]) => {
  return formatToCurrency(transactions.reduce((value, transaction) => value + Number(transaction.amount), 0))
}

const Home = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    getTransactions().then(setTransactions)
  }, [])

  return (
    <S.Wrapper>
      <S.Header>
        <S.Label>
          <div>Número de transações</div>
          <div>{transactions.length}</div>
        </S.Label>
        <S.Label>
          <div>Valor total</div>
          <div>{sumTransactions(transactions)}</div>
        </S.Label>
      </S.Header>
      <hr />
      <S.Container>
        {transactions?.map((transaction) => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </S.Container>
      <S.Link to="/transacao">
        <Button icon={<PlusCircle />}>Criar transação</Button>
      </S.Link>

    </S.Wrapper>
  )
}

export default Home
