import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Noto Sans', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#163020',
    },
    secondary: {
      main: '#304D30',
    },
    info: {
      main: '#FCE09B',
    },
  },
});

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
