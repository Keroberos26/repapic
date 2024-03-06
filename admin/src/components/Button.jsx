import { styled } from '@mui/material/styles';
import { Button, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)({
  borderRadius: 8,
  textTransform: 'unset',
  fontWeight: 700,
  minWidth: 64,
  lineHeight: 1.71429,

  '&.MuiButton-sizeSmall': {
    height: 30,
    fontSize: 13,
    paddingBlock: 4,
    paddingInline: 8,
  },
  '&.MuiButton-sizeMedium': {
    height: 36,
    fontSize: 14,
    paddingBlock: 6,
    paddingInline: 12,
  },
  '&.MuiButton-sizeLarge': {
    height: 48,
    fontSize: 15,
    paddingBlock: 8,
    paddingInline: 16,
  },
});

const CustomButton = ({
  variant = 'contained',
  loading = false,
  loadingComponent,
  children,
  startIcon,
  endIcon,
  to,
  ...props
}) => {
  const loadingElement = loadingComponent || (
    <CircularProgress color="inherit" disableShrink sx={{ height: '20px!important', width: '20px!important' }} />
  );

  return (
    <StyledButton
      variant={variant}
      disabled={loading}
      startIcon={startIcon && loading ? loadingElement : startIcon}
      endIcon={endIcon && loading ? loadingElement : endIcon}
      component={to && Link}
      to={to}
      {...props}
    >
      {loading && !startIcon && !endIcon ? loadingElement : children}
    </StyledButton>
  );
};

CustomButton.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'text', 'soft']),
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  loadingComponent: PropTypes.node,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  to: PropTypes.string,
};

export default CustomButton;
