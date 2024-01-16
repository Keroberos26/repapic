import React, { useEffect } from 'react';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Repapic | Page not found';
  }, []);
  return <div>NotFound</div>;
};

export default NotFound;
