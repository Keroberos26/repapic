import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LoadingTopBar } from './components';
import config from './config';
import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';
import BaseLayout from './layouts/BaseLayout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Verify from './pages/Verify';
import Dashboard from './pages/Dashboard';
import UserList from './pages/UserManagement/UserList';
import UserNew from './pages/UserManagement/UserNew';

const App = () => {
  return (
    <div className="App">
      <LoadingTopBar />
      <Router>
        <Routes>
          <Route path={config.layouts.auth} element={<AuthLayout />}>
            <Route index element={<Navigate to={config.routes.login} replace />} />
            <Route path={config.routes.login} element={<Login />} />
            <Route path={config.routes.register} element={<Register />} />
          </Route>
          <Route path={config.layouts.auth} element={<BaseLayout />}>
            <Route path={config.routes.forgotPassword} element={<ForgotPassword />} />
            <Route path={config.routes.verify} element={<Verify />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path={config.layouts.admin} element={<AdminLayout />}>
            <Route path={config.routes.dashboard} element={<Dashboard />} />
            <Route path={config.routes.userList} element={<UserList />} />
            <Route path={config.routes.userNew} element={<UserNew />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
