import React, { useEffect, useState } from 'react';
import FreightListForm from '../Form/FreightListForm';

interface Freight {
  vehicleType: string;
  distance: number;
  totalKm: number;
  driverFreight: number;
  overLimitTripPrice: number;
  customerTripPrice: number;
  overLimitPrice: number;
  minTime: number;
  maxTime: number;
}

interface FreightListProps {
  vType: string;
}

const FreightList: React.FC<FreightListProps> = ({ vType }) => {
  const [freights, setFreights] = useState<Freight[]>([]);

  const fetchFreights = async () => {
    try {
      const response = await fetch(`http://localhost:5000/freights/freights/${vType}`);
      if (response.ok) {
        const data = await response.json();
        setFreights(data);
      } else {
        console.error('Failed to fetch freights');
      }
    } catch (error) {
      console.error('Error fetching freights:', error);
    }
  };

  useEffect(() => {
    fetchFreights();
     
  }, [vType]);

  return (
    <div className=''>
      <div className='flex justify-between'>
        <h1 className="text-[#107D9F] text-2xl mb-5">Freight List</h1>
        <FreightListForm/>
      </div>
      <div className="overflow-x-auto overflow-y-auto max-h-80"> 
        <table className="min-w-full border-collapse">
          <thead className='bg-gray-100 sticky  z-[-1]'>
            <tr>
              <th className="border border-gray-300 text-left px-4 py-2">Vehicle</th>
              <th className="border border-gray-300 text-left px-4 py-2">Distance</th>
              <th className="border border-gray-300 text-left px-4 py-2">Total KM</th>
              <th className="border border-gray-300 text-left px-4 py-2">Driver Freight</th>
              <th className="border border-gray-300 text-left px-4 py-2">Over Limit Trip Price</th>
              <th className="border border-gray-300 text-left px-4 py-2">Customer Trip Price</th>
              <th className="border border-gray-300 text-left px-4 py-2">Over Limit Price</th>
              <th className="border border-gray-300 text-left px-4 py-2">Min-Time</th>
              <th className="border border-gray-300 text-left px-4 py-2">Max-Time</th>
            </tr>
          </thead>
          <tbody>
            {freights.map((freight, index) => (
              <tr key={index}>
                <td className="border border-gray-200 px-4 py-2">{freight.vehicleType}</td>
                <td className="border border-gray-200 px-4 py-2">{freight.distance}</td>
                <td className="border border-gray-200 px-4 py-2">{freight.totalKm}</td>
                <td className="border border-gray-200 px-4 py-2">{freight.driverFreight}</td>
                <td className="border border-gray-200 px-4 py-2">{freight.overLimitTripPrice}</td>
                <td className="border border-gray-200 px-4 py-2">{freight.customerTripPrice}</td>
                <td className="border border-gray-200 px-4 py-2">{freight.overLimitPrice}</td>
                <td className="border border-gray-200 px-4 py-2">{freight.minTime}</td>
                <td className="border border-gray-200 px-4 py-2">{freight.maxTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FreightList;
