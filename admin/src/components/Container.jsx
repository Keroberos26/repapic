import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className = '' }) => {
  return <div className={`container px-3 mx-auto ${className}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
