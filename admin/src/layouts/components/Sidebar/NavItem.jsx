import { styled } from '@mui/material/styles';
import { Collapse, ListItemButton, ListItemIcon, ListItemText, alpha, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaAngleRight, FaCircle } from 'react-icons/fa6';

const NavItem = ({ icon = FaCircle, text, to, children, type = 'main' }) => {
  const { palette } = useTheme();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(true);

  const StyledListItemButton = styled(ListItemButton)({
    height: 44,
    borderRadius: 6,
    color: '#637381',

    '& .MuiListItemIcon-root': {
      minWidth: 'unset',
      marginRight: 16,
      color: 'inherit',
      transition: 'inherit',
    },

    '& .MuiListItemText-primary': {
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'capitalize',
    },

    '&.main': {
      '.MuiListItemIcon-root': {
        fontSize: 24,
      },

      '&.active': {
        color: palette.primary.main,
        backgroundColor: alpha(palette.primary.main, 0.08),
        '&:hover': { backgroundColor: alpha(palette.primary.main, 0.16) },
      },
    },

    '&.sub1': {
      height: 36,

      '& .MuiListItemIcon-root': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
        fontSize: 4,
      },

      '&.active': {
        '.MuiListItemIcon-root': {
          fontSize: 8,
          color: palette.primary.main,
        },
        '.MuiListItemText-primary': {
          color: '#212b36',
        },
      },
    },
  });

  const Icon = icon;

  return (
    <>
      <StyledListItemButton
        component={to && Link}
        to={!children ? to : null}
        onClick={() => setOpen(!open)}
        className={pathname.includes(to) ? `active ${type}` : type}
        sx={{
          '&.sub1': {},
        }}
      >
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} />
        {children && (
          <span
            className="text-xs transition-transform duration-200"
            style={{ transform: `rotate(${open ? '90deg' : 0})` }}
          >
            <FaAngleRight />
          </span>
        )}
      </StyledListItemButton>
      {children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
};

NavItem.propTypes = {
  icon: PropTypes.func,
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  children: PropTypes.node,
};

export default NavItem;
