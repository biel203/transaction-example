import { BrowserRouter } from 'react-router-dom'
import { HomeRoute } from 'pages/Home'
import { TransactionRoute } from 'pages/Transaction'

const PageRouter = () => (
  <BrowserRouter>
    <HomeRoute />
    <TransactionRoute />
  </BrowserRouter>
)

export default PageRouter
export { PageRouter }
