import layouts from './layouts';

const routes = {
  dashboard: layouts.admin,
  login: layouts.auth + '/login',
  register: layouts.auth + '/register',
};

export default routes;
