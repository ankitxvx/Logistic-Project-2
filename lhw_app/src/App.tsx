import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import VehicleTypeForm from './pages/Form/VehicleTypeForm';
 
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
         <Route path="/form" element={<VehicleTypeForm/>} />
          
      </Routes>
    </Router>
  );
};

export default App;
