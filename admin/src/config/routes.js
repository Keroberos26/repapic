import layouts from './layouts';

const routes = {
  dashboard: layouts.admin + 'dashboard',
  userList: layouts.admin + 'user/list',
  userNew: layouts.admin + 'user/new',
  login: layouts.auth + 'login',
  register: layouts.auth + 'register',
  forgotPassword: layouts.auth + 'forgot-password',
  verify: layouts.auth + 'verify',
};

export default routes;
