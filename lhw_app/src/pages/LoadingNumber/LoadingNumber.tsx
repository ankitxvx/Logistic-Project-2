import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

interface Form {
  _id?: string;
  loadingNumber: number;
  vehicleCode: string;
  vehicleType: string;
  vehicleNumber: string;
  driverName: string;
  driverNumber: string;
  distance: number;
  overloaded: string;
  driverFreight: number;
  customerFreight: number;
}

const initialFormState: Form = {
  loadingNumber: 0,
  vehicleCode: '',
  vehicleType: '',
  vehicleNumber: '',
  driverName: '',
  driverNumber: '',
  distance: 0,
  overloaded: '',
  driverFreight: 0,
  customerFreight: 0,
};

const Loading: React.FC = () => {
  const [entries, setEntries] = useState<Form[]>([]);
  const [form, setForm] = useState<Form>(initialFormState);

  // useEffect(() => {
  //   fetchEntries();
  // }, []);

  const fetchEntries = async  (vehicleCode:string)  => {
    try {
      const response = await axios.get(`http://localhost:5000/entries/${vehicleCode}`);
       return response.data;
       
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if(name === 'vehicleCode'){
       const data =   fetchEntries(value);
       data.then((data) => {
              form.loadingNumber = data.loadingNumber;
              form.vehicleType = data.vehicleType;
              form.vehicleNumber = data.vehicleNumber;
              form.driverName = data.driverName;
              form.driverNumber = data.driverNumber;
              form.distance = data.distance;
              form.overloaded = data.overloaded;
              form.driverFreight = data.driverFreight;
              form.customerFreight = data.customerFreight;
              form.vehicleCode  = data.vehicleCode;
              setForm(form);
        }).catch((error) => { 
          console.error('Error fetching entries:', error);
          form.loadingNumber =  0,
          form.vehicleType = '',
          form.vehicleNumber = '',
          form.driverName =  '',
          form.driverNumber =  '',
          form.distance =  0,
          form.overloaded =  '',
          form.driverFreight =  0,
          form.customerFreight =  0,
          form.vehicleCode  = value;
          setForm(form);
        }
      );
        
    }   
      
      setForm({ ...form, [name]: value });
    
  };

  const handleAddEntry = async () => {
    try {
      const response = await axios.post('http://localhost:5000/entries', form);
      setEntries([...entries, response.data]);
      setForm(initialFormState);
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  const handleDeleteEntry = async (id?: string) => {
    if (!id) return;
    try {
      await axios.delete(`http://localhost:5000/entries/${id}`);
      setEntries(entries.filter(entry => entry._id !== id));
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  const handleSaveEntries = () => {
    console.log('Entries saved:', entries);
    // Additional save logic if needed
  };

  return (
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
              <input type="checkbox" className="cursor-pointer checkboxx" />
            </div>
            <button
              className="flex border items-center gap-2 border-[#4B4DED] rounded-lg bg-white px-[15px] text-[#4B4DED] font-bold py-[4px]"
              onClick={handleAddEntry}
            >
              Add
            </button>
            <button
              className="flex border items-center border-[#4B4DED] rounded-lg bg-white px-[15px] text-[#4B4DED] font-bold py-[4px]"
              onClick={handleSaveEntries}
            >
              Save
            </button>
          </div>
        </div>
        <div className="w-full">
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
          <div className="flex mb-3 items-center gap-3">
            <input
              type="number"
              name="loadingNumber"
              disabled
              value={form.loadingNumber}
              onChange={handleInputChange}
              className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="vehicleCode"
              value={form.vehicleCode}
              onChange={handleInputChange}
              className="w-20 border border-gray-300  rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="vehicleType"
              value={form.vehicleType}
              onChange={handleInputChange}
              className="w-20 border border-gray-300  rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="vehicleNumber"
              value={form.vehicleNumber}
              onChange={handleInputChange}
              className="w-20 border border-gray-300  rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="driverName"
              value={form.driverName}
              onChange={handleInputChange}
              className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
            />
            <input
              type="number"
              name="driverNumber"
              value={form.driverNumber}
              onChange={handleInputChange}
              className="w-20 border border-gray-300  rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
            />
            <input
              type="number"
              name="distance"
              value={form.distance}
              onChange={handleInputChange}
              className="w-20 border border-gray-300  rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
              placeholder="Km"
            />
            <input
              type="text"
              name="overloaded"
              value={form.overloaded}
              onChange={handleInputChange}
              className="w-20 border border-gray-300  rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
            />
            <input
              type="number"
              name="driverFreight"
              value={form.driverFreight}
              onChange={handleInputChange}
              className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
            />
            <input
              type="number"
              name="customerFreight"
              value={form.customerFreight}
              onChange={handleInputChange}
              className="w-20 border border-gray-300  rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          {entries.map((entry) => (
            <div key={entry._id} className="flex mb-3 items-center gap-3">
              <input
                type="number"
                value={entry.loadingNumber}
                readOnly
                className="w-20 border border-gray-300 rounded-lg px-3 py-1 bg-gray-100"
              />
              <input
                type="text"
                value={entry.vehicleCode}
                readOnly
                className="w-20 border border-gray-300  rounded-lg px-3 py-1 bg-gray-100"
              />
              <input
                type="text"
                value={entry.vehicleType}
                readOnly
                className="w-20 border border-gray-300  rounded-lg px-3 py-1 bg-gray-100"
              />
              <input
                type="text"
                value={entry.vehicleNumber}
                readOnly
                className="w-20 border border-gray-300  rounded-lg px-3 py-1 bg-gray-100"
              />
              <input
                type="text"
                value={entry.driverName}
                readOnly
                className="w-20 border border-gray-300 rounded-lg px-3 py-1 bg-gray-100"
              />
              <input
                type="number"
                value={entry.driverNumber}
                readOnly
                className="w-20 border border-gray-300  rounded-lg px-3 py-1 bg-gray-100"
              />
              <input
                type="number"
                value={entry.distance}
                readOnly
                className="w-20 border border-gray-300  rounded-lg px-3 py-1 bg-gray-100"
              />
              <input
                type="text"
                value={entry.overloaded}
                readOnly
                className="w-20 border border-gray-300  rounded-lg px-3 py-1 bg-gray-100"
              />
              <input
                type="number"
                value={entry.driverFreight}
                readOnly
                className="w-20 border border-gray-300 rounded-lg px-3 py-1 bg-gray-100"
              />
              <input
                type="number"
                value={entry.customerFreight}
                readOnly
                className="w-20 border border-gray-300  rounded-lg px-3 py-1 bg-gray-100"
              />
              <button
                className="text-red-500 font-bold"
                onClick={() => handleDeleteEntry(entry._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
