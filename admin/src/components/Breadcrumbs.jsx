import React from 'react';
import { styled } from '@mui/material/styles';
import { Breadcrumbs } from '@mui/material';
import PropTypes from 'prop-types';

const CustomBreadcrumbs = ({ children }) => {
  const StyledBreadcrumbs = styled(Breadcrumbs)({
    '& .MuiBreadcrumbs-li': {
      color: '#637381',
      fontSize: 14,

      '& a': {
        color: '#212B36',
      },
    },
    '& .MuiBreadcrumbs-separator': {
      marginInline: 16,
    },
  });
  return (
    <StyledBreadcrumbs separator={<span className="rounded-full size-1 bg-fade"></span>}>{children}</StyledBreadcrumbs>
  );
};

CustomBreadcrumbs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomBreadcrumbs;
