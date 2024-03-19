import React from 'react';
import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="flex items-center justify-center h-screen gap-5 App">
      <Button variant="contained">Test</Button>
      <Button variant="contained" color="primary">
        Test
      </Button>
      <Button variant="contained" color="secondary" size="small">
        Test
      </Button>
      <Button variant="contained" color="info">
        Test
      </Button>
      <Button variant="contained" color="error" size="large">
        Test
      </Button>
      <Button variant="contained" color="warning">
        Test
      </Button>
      <Button variant="contained" color="success">
        Test
      </Button>
      <Button variant="contained" color="success" disabled>
        Test
      </Button>
    </div>
  );
}

export default App;
