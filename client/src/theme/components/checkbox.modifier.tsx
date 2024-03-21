import { Components, Theme } from '@mui/material/styles';
import { CheckedIcon, IndeterminateIcon, UncheckedIcon } from '../../components/Icons';

export const MuiCheckbox: Components<Theme>['MuiCheckbox'] = {
  defaultProps: {
    icon: <UncheckedIcon width="1.5em" height="1.5em" />,
    checkedIcon: <CheckedIcon width="1.5em" height="1.5em" />,
    indeterminateIcon: <IndeterminateIcon width="1.5em" height="1.5em" />,
  },
};
