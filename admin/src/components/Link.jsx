import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as LinkRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)({
  fontSize: '1em',
});

const CustomLink = ({
  children,
  to,
  color = 'primary',
  underline = 'always',
  className,
  bold = false,
  sx,
  ...props
}) => {
  return (
    <StyledLink
      component={LinkRouter}
      to={to}
      color={color}
      underline={underline}
      className={className}
      sx={{ fontWeight: bold ? 600 : 400, ...sx }}
      {...props}
    >
      {children}
    </StyledLink>
  );
};

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'warning', 'inherit']),
  underline: PropTypes.oneOf(['always', 'none', 'hover']),
  className: PropTypes.string,
  sx: PropTypes.object,
};

export default CustomLink;
