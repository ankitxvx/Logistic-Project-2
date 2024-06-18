import React from 'react';

interface TableRow {
  vehicle: string;
  distance: string;
  totalKm: string;
  driverFreight: string;
  overLimitTripPrice: string;
  customerTripPrice: string;
  overLimitPrice: string;
  minTime: string;
  maxTime: string;
}

const tableData: TableRow[] = [
  { vehicle: 'TUK TUK', distance: 'Distance', totalKm: 'Total KM', driverFreight: 'Driver Freight', overLimitTripPrice: 'Over Limit Trip Price', customerTripPrice: 'Customer Trip Price', overLimitPrice: 'Over Limit Price', minTime: 'Early Min', maxTime: 'Last' },
  { vehicle: 'TUK TUK', distance: 'Distance', totalKm: 'Total KM', driverFreight: 'Driver Freight', overLimitTripPrice: 'Over Limit Trip Price', customerTripPrice: 'Customer Trip Price', overLimitPrice: 'Over Limit Price', minTime: 'Early Min', maxTime: 'Last' },
  { vehicle: 'TUK TUK', distance: 'Distance', totalKm: 'Total KM', driverFreight: 'Driver Freight', overLimitTripPrice: 'Over Limit Trip Price', customerTripPrice: 'Customer Trip Price', overLimitPrice: 'Over Limit Price', minTime: 'Early Min', maxTime: 'Last' },
  { vehicle: 'TUK TUK', distance: 'Distance', totalKm: 'Total KM', driverFreight: 'Driver Freight', overLimitTripPrice: 'Over Limit Trip Price', customerTripPrice: 'Customer Trip Price', overLimitPrice: 'Over Limit Price', minTime: 'Early Min', maxTime: 'Last' },
  { vehicle: 'TUK TUK', distance: 'Distance', totalKm: 'Total KM', driverFreight: 'Driver Freight', overLimitTripPrice: 'Over Limit Trip Price', customerTripPrice: 'Customer Trip Price', overLimitPrice: 'Over Limit Price', minTime: 'Early Min', maxTime: 'Last' },
  // Add more rows as needed to test the scroll functionality
];

const ResponsiveTable: React.FC = () => {
  return (
    <div> 
    <h1 className="text-[#107D9F] text-2xl mb-5">Freight List</h1>
    <div className="overflow-x-auto overflow-y-auto max-h-80"> {/* Adjust max-h-* to your needs */}
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
          {tableData.map((row, index) => (
            <tr key={index}  >
              <td className="border border-gray-300 px-4 py-2">{row.vehicle}</td>
              <td className="border border-gray-300 px-4 py-2">{row.distance}</td>
              <td className="border border-gray-300 px-4 py-2">{row.totalKm}</td>
              <td className="border border-gray-300 px-4 py-2">{row.driverFreight}</td>
              <td className="border border-gray-300 px-4 py-2">{row.overLimitTripPrice}</td>
              <td className="border border-gray-300 px-4 py-2">{row.customerTripPrice}</td>
              <td className="border border-gray-300 px-4 py-2">{row.overLimitPrice}</td>
              <td className="border border-gray-300 px-4 py-2">{row.minTime}</td>
              <td className="border border-gray-300 px-4 py-2">{row.maxTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ResponsiveTable;
