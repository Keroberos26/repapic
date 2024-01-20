import layouts from './layouts';

const routes = {
  home: layouts.main,
  collections: layouts.main + 'san-pham',
  category: layouts.main + 'san-pham/:cateSlug',
  product: layouts.main + 'san-pham/:cateSlug/:productSlug',
  cart: layouts.main + 'gio-hang',
  signIn: layouts.main + 'dang-nhap',
  signUp: layouts.main + 'dang-ky',
  signOut: layouts.main + 'dang-xuat',
  notFound: layouts.main + '*',
};

export default routes;
