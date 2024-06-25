import { useState } from 'react';
import axios from 'axios';

interface Loading {
  loadingNumber: number;
  vehicleCode: string;
  vehicleType: string;
  vehicleNumber: string;
  driverName: string;
  driverPhone: string;
  distance: string;
  overloaded: string;
  driverFreight: string;
  customerTripPrice: string;
}

function Loading() {
  const[selfArrange, setSelfArrange] = useState(false);

  const [entries, setEntries] = useState([
    {
      loadingNumber: 1,
      vehicleCode: '',
      vehicleType: '',
      vehicleNumber: '',
      driverName: '',
      driverPhone: '',
      distance: '',
      overloaded: '',
      driverFreight: '',
      customerTripPrice: ''
    }
  ]);

  const fetchDistanceData = async (index:any, distance:any) => {
    try {
      const response = await axios.get(`http://localhost:5000/distances/${distance}`);
      const data = response.data;
      const updatedEntries = [...entries];
      updatedEntries[index] = {
        ...updatedEntries[index],
        distance: data.distance,
        driverFreight: data.driverFreight,
        customerTripPrice: data.customerTripPrice,
      };
      setEntries(updatedEntries);
    } catch (error) {
      console.error('Error fetching distance data:', error);
    }
  };

  const fetchVehicleData = async (index:any, vehicleCode:any) => {
    try {
      const response = await axios.get(`http://localhost:5000/loadings/${vehicleCode}`);
      const data = response.data;
      const updatedEntries = [...entries];
      updatedEntries[index] = {
        ...updatedEntries[index],
        vehicleCode: data.vehicleCode,
        vehicleType: data.vehicleType,
        vehicleNumber: data.vehicleNumber,
        driverName: data.driverName,
        driverPhone: data.driverPhone,
      };
      setEntries(updatedEntries);
    } catch (error) {
      console.error('Error fetching vehicle data:', error);
    }
  };

  const handleInputChange = (index:any, event:any) => {
    const { name, value } = event.target;
    const updatedEntries = [...entries];
    updatedEntries[index] = {
      ...updatedEntries[index],
      [name]: value
    };
    setEntries(updatedEntries);

    if (name === 'vehicleCode') {
      if (value.length) {
        fetchVehicleData(index, value);
      } else {
        updatedEntries[index] = {
          ...updatedEntries[index],
          vehicleCode: '',
          vehicleType: '',
          vehicleNumber: '',
          driverName: '',
          driverPhone: '',
          distance: '',
          overloaded: '',
          driverFreight: '',
          customerTripPrice: ''
        };
        setEntries(updatedEntries);
      }
    }

    if (name === 'distance') {
      if (value.length) {
        fetchDistanceData(index, value);
      } else {
        updatedEntries[index] = {
          ...updatedEntries[index],
          distance: '',
          driverFreight: '',
          customerTripPrice: ''
        };
        setEntries(updatedEntries);
      }
    }
  };

  const handleAddEntry = () => {
    const newEntry = {
      loadingNumber: entries.length + 1,
      vehicleCode: '',
      vehicleType: '',
      vehicleNumber: '',
      driverName: '',
      driverPhone: '',
      distance: '',
      overloaded: '',
      driverFreight: '',
      customerTripPrice: ''
    };
    setEntries([...entries, newEntry]);
  };

  const handleDeleteEntry = (index:any) => {
    const updatedEntries = entries.filter((_, i) => i !== index).map((entry, i) => ({
      ...entry,
      loadingNumber: i + 1
    }));
    setEntries(updatedEntries);
  };
  
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/loadings/addloading",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(entries),
        }
      );
  
      if (response.ok) {
        console.log("Loading data saved successfully!");
        setEntries([{
          loadingNumber: 1,
          vehicleCode: '',
          vehicleType: '',
          vehicleNumber: '',
          driverName: '',
          driverPhone: '',
          distance: '',
          overloaded: '',
          driverFreight: '',
          customerTripPrice: ''
        }]);
      } else {
        console.error("Failed to save form data");
      }
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };

  return (
    <div className="p-40">
      <div className="gap-[40px] flex flex-col">
        <div className="flex flex-col w-full flex-wrap">
          <div className="flex mb-5 items-center gap-3">
            <h1 className="font-semibold w-[15rem] text-xl text-gray-500 capitalize">
              Loading Number
            </h1>
            <div className="flex bg-[#818181aa] h-[2px] w-[100%] font-medium"></div>
            <div className="flex gap-5 w-[28rem]">
              <div className="flex border gap-2 w-[20rem] rounded-lg bg-white px-5 text-[#4B4DED] font-bold py-2">
                <p>Self Arrange</p>
                <input type="checkbox" className="cursor-pointer checkboxx" checked={selfArrange} onChange={() => setSelfArrange(!selfArrange)} />
              </div>
              <button
                className="flex border items-center gap-2 border-[#4B4DED] rounded-lg bg-white px-[15px] text-[#4B4DED] font-bold py-[4px]"
                onClick={handleAddEntry}
              >
                Add
              </button>
              <button 
                className="flex border items-center border-[#4B4DED] rounded-lg bg-white px-[15px] text-[#4B4DED] font-bold py-[4px]"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
          <div className="w-full" id="secondTable">
            <div className="flex mb-3 items-center gap-3 w-full">
              <p className="w-20">Loading Number</p>
              <p className="w-20">Vehicle Code</p>
              <p className="w-20">Vehicle Type</p>
              <p className="w-20">Vehicle Number</p>
              <p className="w-20">Driver Name</p>
              <p className="w-20">Driver Number</p>
              <p className="w-20">Distance</p>
              <p className="w-20">Overloaded</p>
              <p className="ml-2 w-20">Driver Freight</p>
              <p className="w-20">Customer Freight</p>
            </div>
            {entries.map((entry:any, index:any) => (
              <div key={index} className="flex mb-3 items-center gap-3">
                <input
                  type="number"
                  name="loadingNumber"
                  value={entry.loadingNumber}
                  onChange={(event) => handleInputChange(index, event)}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
                  readOnly
                />
                <input
                  type="text"
                  name="vehicleCode"
                  value={entry.vehicleCode}
                  onChange={(event) => handleInputChange(index, event)}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
                  disabled={selfArrange}
                />
                <input
                  type="text"
                  name="vehicleType"
                  value={entry.vehicleType}
                  onChange={(event) => handleInputChange(index, event)}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
                  disabled={selfArrange}
                />
                <input
                  type="text"
                  name="vehicleNumber"
                  value={entry.vehicleNumber}
                  onChange={(event) => handleInputChange(index, event)}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
                  disabled={selfArrange}
                />
                <input
                  type="text"
                  name="driverName"
                  value={entry.driverName}
                  onChange={(event) => handleInputChange(index, event)}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
                  disabled={selfArrange}
                />
                <input
                  type="number"
                  name="driverPhone"
                  value={entry.driverPhone}
                  onChange={(event) => handleInputChange(index, event)}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
                  disabled={selfArrange}
                />
                <input
                  type="number"
                  name="distance"
                  value={entry.distance}
                  onChange={(event) => handleInputChange(index, event)}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
                  disabled={selfArrange}
                  placeholder="Km"
                />
                <input
                  type="text"
                  name="overloaded"
                  value={entry.overloaded}
                  onChange={(event) => handleInputChange(index, event)}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
                  disabled={selfArrange}
                />
                <input
                  type="number"
                  name="driverFreight"
                  value={entry.driverFreight}
                  onChange={(event) => handleInputChange(index, event)}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
                  disabled={selfArrange}
                />
                <input
                  type="number"
                  name="customerTripPrice"
                  value={entry.customerTripPrice}
                  onChange={(event) => handleInputChange(index, event)}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
                  disabled={selfArrange}
                />
                <button
                  className="text-red-500 font-bold"
                  onClick={() => handleDeleteEntry(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
