import layouts from './layouts';

const routes = {
  dashboard: layouts.admin,
  login: layouts.auth + 'login',
  register: layouts.auth + 'register',
  forgotPassword: layouts.auth + 'forgot-password',
  verify: layouts.auth + 'verify',
};

export default routes;
