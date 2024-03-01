import { useContext } from 'react';
import { LoadingBarContext } from '../context/LoadingBarProvider';

const useLoading = () => {
  return useContext(LoadingBarContext);
};

export default useLoading;
