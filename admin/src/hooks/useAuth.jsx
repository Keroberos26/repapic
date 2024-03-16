import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import api from '../utils/api';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';

const useAuth = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const login = async (credentials) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const result = await api.post('/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
      return true;
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.response });
      return false;
    }
  };

  const loginWithGoogle = async () => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const result = await signInWithPopup(auth, provider);

      const response = await api.post('/auth/google', {
        name: result.user.displayName,
        email: result.user.email,
        avatar: result.user.photoURL,
        phone: result.user.phoneNumber,
        status: result.user.emailVerified ? 'verified' : 'pending',
        providerId: result.providerId,
      });

      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      return true;
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.response });
      return false;
    }
  };

  const logout = () => {
    api.get('/auth/logout');
    dispatch({ type: 'LOGOUT' });
  };

  return { user, loading, error, login, loginWithGoogle, logout };
};

export default useAuth;
