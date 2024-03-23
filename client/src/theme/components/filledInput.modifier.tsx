import { Components, Theme } from '@mui/material/styles';
import { palette } from '../palette';

export const MuiFilledInput: Components<Theme>['MuiFilledInput'] = {
  styleOverrides: {
    root: {
      borderRadius: 8,
      backgroundColor: `${palette.grey?.[500]}14`,

      '&.Mui-error': {
        backgroundColor: '#ff563014',

        '&.Mui-focused': {
          backgroundColor: '#ff563029',
        },
      },

      '&:not(.Mui-error):not(.Mui-disabled):hover': {
        backgroundColor: `${palette.grey?.[500]}29`,
      },

      '&:before, &:after': {
        content: 'none',
      },
    },
    focused: {
      backgroundColor: `${palette.grey?.[500]}29`,
    },
    error: {
      backgroundColor: `red`,
    },
  },
};
