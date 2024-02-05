import config from '../config';
import AdminLayout from '../layouts/AdminLayout';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Collections from '../pages/Collections';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Product from '../pages/Product';
import SignIn from '../pages/SignIn';

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
        path: config.routes.product,
        element: Product,
      },
      {
        path: config.routes.contact,
        element: Contact,
      },
      {
        path: config.routes.signIn,
        element: SignIn,
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
