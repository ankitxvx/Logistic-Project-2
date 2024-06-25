import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Loading from './pages/Loading/Loading';
 
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
         <Route path="/loading" element={<Loading/>} />
      </Routes>
    </Router>
  );
};

export default App;
