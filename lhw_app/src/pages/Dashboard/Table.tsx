import React from 'react';
import PopupForm from '../Form/VehicleTypeForm';

interface Vehicle {
  sn: string;
  type: string;
  capacity: string;
  kmRange: number;
  drivers: number;
}

const vehicles: Vehicle[] = [
  { sn: '01', type: 'TUK TUK', capacity: '1200Km', kmRange: 10, drivers: 9 },
  { sn: '02', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '03', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '04', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '05', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '05', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '05', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '05', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '05', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '05', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '05', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '05', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '05', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '05', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '05', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '05', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '05', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
  { sn: '05', type: 'Truck', capacity: '1200Km', kmRange: 1000, drivers: 1000 },
];

const Table: React.FC = () => {
  return (
    <div className=''>
        <div className='flex justify-between'>
        <h1 className="text-[#107D9F] text-2xl mb-5">Vehicle Type</h1>
        <PopupForm/>
        </div>
          
    <div className="overflow-x-auto overflow-y-auto max-h-80"> {/* Adjust max-h-* to your needs */}
    
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100 sticky z-[-1] ">
          <tr>
            <th className="border border-gray-300 text-left px-4 py-2">S.NO</th>
            <th className="border w-[549px] px-[16px] border-gray-300 text-left">Vehicle Type</th>
            <th className="border border-gray-300 text-left px-4 py-2">Capacity</th>
            <th className="border border-gray-300 text-left px-4 py-2">Number of Km Range</th>
            <th className="border border-gray-300 text-left px-4 py-2">Number of Drivers</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle, index) => (
            <tr key={vehicle.sn}>
              <td className="border border-gray-300 px-4 py-2">{vehicle.sn}</td>
              <td className="border border-gray-300 px-4 py-2">{vehicle.type}</td>
              <td className="border border-gray-300 px-4 py-2">{vehicle.capacity}</td>
              <td className="border border-gray-300 px-4 py-2">{vehicle.kmRange}</td>
              <td className="border border-gray-300 px-4 py-2">{vehicle.drivers}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Table;
