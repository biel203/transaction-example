import { Route } from 'react-router-dom'
import Home from './'

const HomeRoute = () => (
  <Route exact path="/">
    <Home />
  </Route>
)

export default HomeRoute
export { HomeRoute }
