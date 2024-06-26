import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import VehicleTypeForm from './pages/Form/VehicleTypeForm';
import Table from './pages/Dashboard/Table';
import Loading from './pages/LoadingNumber/LoadingNumber';
import Logistic from './pages/Dashboard/Logistic';
 
const App: React.FC = () => {
  return (
    <Router>
      <Dashboard/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
         <Route path="/form" element={<VehicleTypeForm/>} />
         <Route path='/vehicle' element = {<Table/>} />
         <Route path='/loading' element = {<Loading/>}/>
         <Route path='/logistic' element = {<Logistic/>}/>
         
      </Routes>
      
    </Router>
  );
};

export default App;
