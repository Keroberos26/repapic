import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import api from '../utils/api';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';

const useAuth = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const login = (credentials) => {
    dispatch({ type: 'LOGIN_START' });
    return api
      .post('/auth/login', credentials)
      .then((res) => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
        return true;
      })
      .catch((err) => {
        dispatch({ type: 'LOGIN_FAILURE', payload: err.response });
        return false;
      });
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        api
          .post('/auth/google', {
            name: result.user.displayName,
            email: result.user.email,
            avatar: result.user.photoURL,
            phone: result.user.phoneNumber,
            status: result.user.emailVerified ? 'verified' : 'pending',
            providerId: result.providerId,
          })
          .then((res) => {
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
          })
          .catch((err) => {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response });
          });
      })
      .catch((error) => {
        dispatch({ type: 'LOGIN_FAILURE', payload: error });
      });
  };

  const logout = () => {
    api.get('/auth/logout');
    dispatch({ type: 'LOGOUT' });
  };

  return { user, loading, error, login, loginWithGoogle, logout };
};

export default useAuth;
