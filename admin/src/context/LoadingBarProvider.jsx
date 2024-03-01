import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LoadingBarContext = createContext(0);

const LoadingBarProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  return <LoadingBarContext.Provider value={{ progress, setProgress }}>{children}</LoadingBarContext.Provider>;
};

LoadingBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoadingBarProvider;
