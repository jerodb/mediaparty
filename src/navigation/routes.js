import Home from '../screens/Home'
import NotFound from '../screens/NotFound'

const routes = [
  {
    path: '/',
    exact: true,
    state: 'home',
    Component: Home,
  },
  {
    path: '',
    state: 'notFound',
    Component: NotFound,
  },
]

export default routes
