import config from '../config';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';

export const publicRoutes = [
  {
    path: config.layouts.auth,
    element: AuthLayout,
    components: [
      {
        path: config.routes.login,
        element: Login,
      },
    ],
  },
];
