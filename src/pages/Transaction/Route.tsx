import { Route } from 'react-router-dom'
import TransactionPage from './Transaction'

const TransactionRoute = () => (
  <Route path="/transacao">
    <TransactionPage />
  </Route>
)

export default TransactionRoute
export { TransactionRoute }
