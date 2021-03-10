import { render, screen } from '@testing-library/react'

import TransactionItem from '.'

const props = {
  credit_card_holder_name: 'TEST',
  amount: 10000,
  date: '2020-11-10T19:43:56.451Z',
  status: 'paid'
}

test('Shoould render component', () => {
  render(<TransactionItem {...props}/>)

  expect(screen.getByText(/test/i)).toBeInTheDocument()
  expect(screen.getByText('R$ 100,00')).toBeInTheDocument()
  expect(screen.getByText(/10 de novembro de 2020/i)).toBeInTheDocument()
  expect(screen.getByText(/paga/i)).toBeInTheDocument()
})
