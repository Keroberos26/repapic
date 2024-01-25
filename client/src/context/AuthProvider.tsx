import React, { FC, createContext, useEffect, useReducer } from 'react';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user') || '') || null,
  loading: false,
  error: null,
};

type ActionType =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: any }
  | { type: 'LOGIN_FAILURE'; payload: any }
  | { type: 'LOGOUT' };

const reducer = (prevState: typeof INITIAL_STATE, action: ActionType) => {
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

export const AuthContext = createContext<any>(INITIAL_STATE);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
