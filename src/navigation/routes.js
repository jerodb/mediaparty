import Home from '../screens/Home'
import Sched from '../screens/Sched'
import NotFound from '../screens/NotFound'

const routes = [
  {
    path: '/sched',
    exact: true,
    state: 'sched',
    Component: Sched,
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
