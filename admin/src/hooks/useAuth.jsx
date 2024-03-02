import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import axios from 'axios';

const useAuth = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const login = (credentials) => {
    dispatch({ type: 'LOGIN_START' });
    return axios
      .post('https://dummyjson.com/auth/login', { username: credentials.email, password: credentials.password })
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
    dispatch({ type: 'LOGOUT' });
  };

  return { user, loading, error, login, logout };
};

export default useAuth;
