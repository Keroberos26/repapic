import React from 'react';
import PropTypes from 'prop-types';

const Paper = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden bg-white rounded-2xl text-default shadow-paper ${className}`}>
      {children}
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Paper;
