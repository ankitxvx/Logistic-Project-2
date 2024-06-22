import { useEffect, useState } from "react";
import DriverForm from "../Form/DriverForm";
interface Driver {
    sn: string;
    vehicleType: string;
    driverName: string;
    vehicleCode: number;
    vehicleNumber: number;
    driverPhone: number;
  }
function DriverList() {
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const fetchDrivers = async () => {
      try {
        const response = await fetch("http://localhost:5000/drivers/alldriver");
        if (response.ok) {
          const data = await response.json();
          setDrivers(data);
        } else {
          console.error("Failed to fetch drivers");
        }
      } catch (error) {
        console.error("Error fetching drivers:", error);
      }
    };
    useEffect(() => {
      fetchDrivers();
    }, [drivers]);
  return (
    <>
     <div>
            <div className="flex justify-between">
              <div className=""></div>
              <DriverForm />
            </div>
            <div className="mt-5 overflow-x-auto overflow-y-auto max-h-80">
              <table className="min-w-full border-collapse">
                <thead className="bg-gray-100 sticky z-[-1] ">
                  <tr>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      S.NO
                    </th>
                    <th className="border w-[449px] px-[16px] border-gray-300 text-left">
                      Vehicle Type
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      Driver Name
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                    Vehicle Code
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      Vehicle Number
                    </th>
                    <th className="border border-gray-300 text-left px-4 py-2">
                      Driver Phone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {drivers.map((driver, index) => (
                    <tr key={`${driver.sn}-${index}`}>
                      <td className="border border-gray-300 px-4 py-2">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {driver.vehicleType}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {driver.driverName}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {driver.vehicleCode}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {driver.vehicleNumber}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {driver.driverPhone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
    </>
  )
}

export default DriverList