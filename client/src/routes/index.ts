import config from '../../src/config';
import Store from '../pages/Store';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Product from '../pages/Product';

type RouteType = {
  path: string;
  component: React.ComponentType<any>;
  layout?: React.ComponentType<any>;
};

export const publicRoutes: RouteType[] = [
  { path: config.routes.home, component: Home },
  { path: config.routes.collections, component: Store },
  { path: config.routes.product, component: Product },
  { path: config.routes.notFound, component: NotFound },
];

export const privateRoutes = [];
