import layouts from './layouts';

const routes = {
  home: layouts.main,
  collections: layouts.main + 'san-pham',
  category: layouts.main + 'san-pham/:cateSlug',
  product: layouts.main + 'san-pham/:cateSlug/:productSlug',
  cart: layouts.main + 'gio-hang',
  signIn: layouts.main + 'tai-khoan/dang-nhap',
  signUp: layouts.main + 'tai-khoan/dang-ky',
  notFound: layouts.main + '*',
};

export default routes;
