import React from 'react';
import LoadingBar from 'react-top-loading-bar';
import { useLoading } from '../hooks';

const LoadingTopBar = () => {
  const { progress, setProgress } = useLoading();

  return (
    <LoadingBar
      color="var(--primary-color)"
      height={4}
      progress={progress}
      loaderSpeed={2000}
      waitingTime={500}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default LoadingTopBar;
