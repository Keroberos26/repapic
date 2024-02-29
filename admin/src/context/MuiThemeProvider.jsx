import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  typography: {
    fontFamily: ['Public Sans', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    default: createColor('#212B36'),
    primary: createColor('#00A76F'),
    secondary: createColor('#8e33ff'),
    error: createColor('#FF5630'),
  },
});

const MuiThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

MuiThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default MuiThemeProvider;
