import config from '../config';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/Dashboard';
export const publicRoutes = [
  {
    path: config.layouts.admin,
    element: AdminLayout,
    components: [
      {
        path: config.routes.dashboard,
        element: Dashboard,
      },
    ],
  },
];
