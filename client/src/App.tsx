import './App.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import config from './config';
import Login from './pages/Login';
import Register from './pages/Register';
import BaseLayout from './layouts/BaseLayout';
import Verify from './pages/Verify';
import ForgotPassword from './pages/ForgotPassword';
import NewPassword from './pages/NewPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}></Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path={config.routes.login} element={<Login />} />
            <Route path={config.routes.register} element={<Register />} />
          </Route>
          <Route path="/" element={<BaseLayout />}>
            <Route path={config.routes.verify} element={<Verify />} />
            <Route path={config.routes.forgotPassword} element={<ForgotPassword />} />
            <Route path={config.routes.newPassword} element={<NewPassword />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
