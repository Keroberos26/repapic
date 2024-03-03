import React, { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: null,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      throw new Error('Invalid action');
  }
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem('user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('user');
    }
  }, [state.user]);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
