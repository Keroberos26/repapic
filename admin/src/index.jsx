import React from 'react';
import ReactDOM from 'react-dom/client';
import 'simplebar-react/dist/simplebar.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MuiThemeProvider from './context/MuiThemeProvider';
import LoadingBarProvider from './context/LoadingBarProvider';
import AuthProvider from './context/AuthProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MuiThemeProvider>
        <AuthProvider>
          <LoadingBarProvider>
            <App />
          </LoadingBarProvider>
        </AuthProvider>
      </MuiThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>,
);

reportWebVitals();
