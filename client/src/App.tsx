import './App.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
