import { Alert } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { FaCircleCheck } from 'react-icons/fa6';
import { IoIosInformationCircle } from 'react-icons/io';
import { PiWarningFill, PiWarningOctagonFill } from 'react-icons/pi';

const StyledAlert = styled(Alert)({
  borderRadius: 8,
});

const CustomAlert = ({ children, severity = 'error', icon, ...props }) => {
  const { palette } = useTheme();

  const defaultIcon = {
    info: <IoIosInformationCircle />,
    success: <FaCircleCheck />,
    warning: <PiWarningFill />,
    error: <PiWarningOctagonFill />,
  };

  return (
    <StyledAlert
      severity={severity}
      icon={icon || defaultIcon[severity]}
      sx={{
        '&.MuiAlert-standard': { backgroundColor: palette[severity].lighter },
        '&.MuiAlert-outlined': {
          backgroundColor: palette[severity].main + '14',
          borderColor: palette[severity].main + '29',
        },
      }}
      {...props}
    >
      {children}
    </StyledAlert>
  );
};

CustomAlert.propTypes = {
  children: PropTypes.node.isRequired,
  severity: PropTypes.oneOf(['success', 'warning', 'info', 'error']),
};

export default CustomAlert;
