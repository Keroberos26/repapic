import config from '../config';
import AdminLayout from '../layouts/AdminLayout';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Collections from '../pages/Collections';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

type RouteType = {
  path: string;
  element: React.ComponentType<any>;
  components: { path: string; element: React.ComponentType<any> }[];
};

export const publicRoutes: RouteType[] = [
  {
    path: config.layouts.main,
    element: MainLayout,
    components: [
      {
        path: config.routes.home,
        element: Home,
      },
      {
        path: config.routes.collections,
        element: Collections,
      },
      {
        path: config.routes.notFound,
        element: NotFound,
      },
    ],
  },
  {
    path: config.layouts.admin,
    element: AdminLayout,
    components: [],
  },
];

export const privateRoutes: RouteType[] = [];
