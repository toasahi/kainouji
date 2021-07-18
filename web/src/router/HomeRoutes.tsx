import { Page404 } from '../components/pages/Page404';
import { Weather } from '../components/pages/Weather';
import { LookField } from '../components/pages/LookField';
import { RegisterField } from '../components/pages/RegisterField';
import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/lookfield',
    exact: true,
    children: <LookField />,
  },
  {
    path: '/registerfield',
    exact: false,
    children: <RegisterField />,
  },
  {
    path: '/weather',
    exact: false,
    children: <Weather />,
  },
  {
    path: '/login',
    exact: false,
    children: <Login />,
  },
  {
    path: '/*',
    exact: false,
    children: <Page404 />,
  },
];
