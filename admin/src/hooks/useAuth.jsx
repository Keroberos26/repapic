import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import api from '../utils/api';

const useAuth = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const login = (credentials) => {
    dispatch({ type: 'LOGIN_START' });
    return api
      .post('/auth/login', { ...credentials })
      .then((res) => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
        return true;
      })
      .catch((err) => {
        dispatch({ type: 'LOGIN_FAILURE', payload: err.response });
        return false;
      });
  };

  const logout = () => {
    api.get('/auth/logout');
    dispatch({ type: 'LOGOUT' });
  };

  return { user, loading, error, login, logout };
};

export default useAuth;
