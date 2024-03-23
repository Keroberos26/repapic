import { Components, Theme } from '@mui/material/styles';
import { palette } from '../palette';

export const MuiInputLabel: Components<Theme>['MuiInputLabel'] = {
  styleOverrides: {
    root: {
      color: palette.grey?.[500],
    },
    shrink: {
      fontWeight: 600,
    },
  },
};
