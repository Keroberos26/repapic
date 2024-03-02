import { styled } from '@mui/material/styles';
import { Button, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';

const StyledButton = styled(Button)({
  borderRadius: 8,
  textTransform: 'unset',
  fontWeight: 700,
  fontSize: 15,
  height: 48,
  minWidth: 64,
  paddingBlock: 8,
  paddingRight: 12,
  lineHeight: 1.71429,
});

const CustomButton = ({ loading = false, loadingComponent, children, startIcon, endIcon, ...props }) => {
  const loadingElement = loadingComponent || (
    <CircularProgress color="inherit" disableShrink sx={{ height: '20px!important', width: '20px!important' }} />
  );

  return (
    <StyledButton
      disabled={loading}
      startIcon={startIcon && loading ? loadingElement : startIcon}
      endIcon={endIcon && loading ? loadingElement : endIcon}
      {...props}
    >
      {loading && !startIcon && !endIcon ? loadingElement : children}
    </StyledButton>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  loadingComponent: PropTypes.node,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

export default CustomButton;
