import { formatDateToPtBR } from 'utils/formatDate'
import { formatToCurrency } from 'utils/formatToCurrency'

import * as S from './styled'

import { STATUS, STATUS_LABEL } from './contracts'

const checkStatus = (status: string) => {
  return status === STATUS.PAID ? STATUS_LABEL.PAID : STATUS_LABEL.REFUSED
}

export type TransactionItemProps = {
  credit_card_holder_name: string
  amount: number
  date: string
  status: string
}

const TransactionItem = ({
  credit_card_holder_name,
  amount,
  date,
  status
}: TransactionItemProps) => (
  <S.Header>
    <S.Label status={status}>
      <div>{credit_card_holder_name}</div>
      <div>{formatToCurrency(amount)}</div>
      <div>{formatDateToPtBR(date)}</div>
      <div>{checkStatus(status)}</div>
    </S.Label>
  </S.Header>
)

export default TransactionItem
