import React, { useState } from 'react';
import api from '../../utils/api';
import { Button } from '@mui/material';
import { useDocumentTitle } from '../../hooks';

const Dashboard = () => {
  useDocumentTitle('Dashboard');
  const [pro, setPro] = useState({});

  const handleClick = () => {
    api
      .get('/products')
      .then((res) => {
        setPro(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      Dashboard
      <Button onClick={handleClick}>GET</Button>
      <div>{JSON.stringify(pro)}</div>
    </div>
  );
};

export default Dashboard;
