import Home from '../screens/Home'
import Agenda from '../screens/Agenda'
import NotFound from '../screens/NotFound'

const routes = [
  {
    path: '/agenda',
    exact: true,
    state: 'agenda',
    Component: Agenda,
  },
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
