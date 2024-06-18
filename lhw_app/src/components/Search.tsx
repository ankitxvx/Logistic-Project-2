import React, { useState } from 'react';
import axios from 'axios';

interface BasePrice {
  rangeFrom: string;
  rangeTo: string;
  basePrice: string;
  overloadBasePrice: string;
  driverBasePrice: string;
  customerBasePrice: string;
}

interface Vehicle {
  vehicleCode: string;
  vehicleType: string;
  vehicleNumber: string;
  driverName: string;
  driverContactNo: string;
  vehicleOwner: string;
  basePrices: BasePrice[];
}

const SearchVehicle: React.FC = () => {
  const [vehicleCode, setVehicleCode] = useState<string>('');
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!vehicleCode) {
      setError('Please enter a vehicle code.');
      return;
    }

    try {
      const response = await axios.get<Vehicle>(`http://localhost:5000/vehicles/${vehicleCode}`);
      setVehicle(response.data);
      setError(null);
    } catch (err) {
      setVehicle(null);
      setError('Vehicle not found or server error occurred.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-[#107D9F]">Search Vehicle</h2>
      <div className="mb-4">
        <input
          type="text"
          value={vehicleCode}
          onChange={(e) => setVehicleCode(e.target.value)}
          className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
          placeholder="Enter Vehicle Code"
        />
        <button
          onClick={handleSearch}
          className="inline-flex items-center border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-[#107D9F] hover:bg-[#106A82] px-4 py-2 mt-2"
        >
          Search
        </button>
      </div>

      {error && <div className="text-red-500">{error}</div>}

      {vehicle && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Vehicle Details</h3>
          <p><strong>Vehicle Code:</strong> {vehicle.vehicleCode}</p>
          <p><strong>Vehicle Type:</strong> {vehicle.vehicleType}</p>
          <p><strong>Vehicle Number:</strong> {vehicle.vehicleNumber}</p>
          <p><strong>Driver Name:</strong> {vehicle.driverName}</p>
          <p><strong>Driver Contact No:</strong> {vehicle.driverContactNo}</p>
          <p><strong>Vehicle Owner:</strong> {vehicle.vehicleOwner}</p>
          <h4 className="text-lg font-semibold mt-4">Base Prices</h4>
          {vehicle.basePrices.map((basePrice, index) => (
            <div key={index} className="border p-2 mt-2">
              <p><strong>Range From:</strong> {basePrice.rangeFrom} KM</p>
              <p><strong>Range To:</strong> {basePrice.rangeTo} KM</p>
              <p><strong>Base Price:</strong> {basePrice.basePrice}</p>
              <p><strong>Overload Base Price:</strong> {basePrice.overloadBasePrice}</p>
              <p><strong>Driver Base Price:</strong> {basePrice.driverBasePrice}</p>
              <p><strong>Customer Base Price:</strong> {basePrice.customerBasePrice}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchVehicle;
