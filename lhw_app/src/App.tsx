import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Logistics from './pages/Logistics';
import EditVehicle from './components/EditVehicle';
import SearchVehicle from './components/Search';
import VehicleType from './components/VechicleType';
import Table from './pages/Dashboard/Table';
import FreightList from './pages/Dashboard/FreightList';
import Form from './pages/Form/VehicleTypeForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/edit-vehicle" element={<EditVehicle />} />
        <Route path="/search" element={<SearchVehicle/>} />
        <Route path="/vtype" element={<VehicleType/>} />
        <Route path='/v' element = {<Table/>} />
        <Route path='/fl' element = {<FreightList/>} />
         <Route path="/form" element={<Form/>} />

      </Routes>
    </Router>
  );
};

export default App;
