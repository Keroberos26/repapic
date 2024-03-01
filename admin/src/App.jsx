import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import config from './config';
import AuthLayout from './layouts/AuthLayout';
import BaseLayout from './layouts/BaseLayout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={config.layouts.auth} element={<AuthLayout />}>
            <Route index element={<Navigate to={config.routes.login} replace />} />
            <Route path={config.routes.login} element={<Login />} />
            <Route path={config.routes.register} element={<Register />} />
          </Route>
          <Route path={config.layouts.auth} element={<BaseLayout />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
