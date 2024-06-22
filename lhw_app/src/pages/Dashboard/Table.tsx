import React, { useEffect, useState } from "react";
import PopupForm from "../Form/VehicleTypeForm";
import FreightList from "./FreightList";
import DriverList from "./DriverList";

interface Vehicle {
  sn: string;
  vehicleType: string;
  capacity: string;
  kmRange: number;
  numberOfDrivers: number;
}

const Table: React.FC = () => {
  const [activeTab, setActiveTab] = useState("vehicle");
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const fetchVehicles = async () => {
    try {
      const response = await fetch("http://localhost:5000/vehicles/allvehicle");
      if (response.ok) {
        const data = await response.json();
        setVehicles(data);
      } else {
        console.error("Failed to fetch vehicles");
      }
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };
  useEffect(() => {
    fetchVehicles();
  }, [vehicles]);
  return (
    <>
      <div className="flex border-b border-gray-200">
        <button
          className={`py-2 px-4 ${
            activeTab === "vehicle"
              ? "border-b-2 border-teal-600 text-teal-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("vehicle")}
        >
          <h1 className="text-[#107D9F] text-2xl mb-0">Vehicle Type</h1>
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "drivers"
              ? "border-b-2 border-teal-600 text-teal-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("drivers")}
        >
          <h1 className="text-[#107D9F] text-2xl mb-0">Drivers</h1>
        </button>
      </div>
      <div className="p-4">
        {activeTab === "vehicle" && (
          <div>
            <div className="flex justify-between">
              <div className=""></div>
              <PopupForm />
            </div>
            <div className="overflow-x-auto overflow-y-auto max-h-80">
              <table className="min-w-full border-collapse">
                <thead className="bg-gray-100 sticky z-[-1] ">
                  <tr>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      S.NO
                    </th>
                    <th className="border w-[549px] px-[16px] border-gray-300 text-left">
                      Vehicle Type
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      Capacity
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      Number of Km Range
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      Number of Drivers
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.map((vehicle, index) => (
                    <tr key={`${vehicle.sn}-${index}`}>
                      <td className="border border-gray-300 px-4 py-2">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {vehicle.vehicleType}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {vehicle.capacity}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {vehicle.kmRange}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {vehicle.numberOfDrivers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex-1  p-4">
              <FreightList />
            </div>
          </div>
        )}
        {activeTab === "drivers" && (
          <div>
         <DriverList/>
          </div>
        )}
      </div>
    </>
  );
};

export default Table;
