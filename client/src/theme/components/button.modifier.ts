import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    default: true;
  }
}

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    color: 'default',
    variant: 'contained',
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      minWidth: 64,
      borderRadius: 8,
      fontWeight: 700,
      textTransform: 'unset',
    },
  },
  variants: [
    {
      props: { color: 'default', variant: 'contained' },
      style: ({ theme }) => {
        const {
          palette: {
            default: { light, main },
          },
        } = theme;
        return {
          backgroundColor: main,
          '&:hover': {
            backgroundColor: light,
          },
        };
      },
    },
    {
      props: { size: 'small' },
      style: {
        height: 30,
        paddingInline: 4,
        paddingBlock: 8,
      },
    },
    {
      props: { size: 'medium' },
      style: {
        height: 36,
        paddingInline: 6,
        paddingBlock: 12,
      },
    },
    {
      props: { size: 'large' },
      style: {
        height: 48,
        paddingInline: 8,
        paddingBlock: 16,
      },
    },
  ],
};
