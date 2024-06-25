import React, { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";

interface Form {
  _id?: string;
  loadingNumber: number;
  vehicleCode: string;
  vehicleType: string;
  vehicleNumber: string;
  driverName: string;
  driverNumber: string;
  distance: number;
  overloaded?: string;
  driverFreight: number;
  customerFreight: number;
}

const initialFormState: Form = {
  loadingNumber: 0,
  vehicleCode: "",
  vehicleType: "",
  vehicleNumber: "",
  driverName: "",
  driverNumber: "",
  distance: 0,
  overloaded: "",
  driverFreight: 0,
  customerFreight: 0,
};

const Loading: React.FC = () => {
  const [entries, setEntries] = useState<Form[]>([]);
  const [form, setForm] = useState<Form>(initialFormState);
  const [overloaded, setOverloaded] = useState<string>("no");
  const [code, setCode] = useState<string>("");
  const [dist, setDist] = useState<number>(0);
  const [arrange, setArrange] = useState<boolean>(false);

  const fetchDriverData = async (vehicleCode: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/drivers/driver/${vehicleCode}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching driver data:", error);
      return null;
    }
  };

  const fetchFreightData = async (distance: number) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/freights/freight/${distance}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching freight data:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchDriverData(code);
    fetchFreightData(dist);
  }, [code, dist, overloaded]);

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.overloaded = overloaded;
    setForm({ ...form, [name]: value });

    if (name === "vehicleCode") {
      const data = await fetchDriverData(value);
      if (data && data.length > 0) {
        setCode(value);
        setForm((prevForm) => ({
          ...prevForm,
          driverName: data[0].driverName,
          driverNumber: data[0].driverPhone,
          vehicleType: data[0].vehicleType,
          vehicleNumber: data[0].vehicleNumber,
        }));
      }
    }
    if (name === "distance") {
      setDist(parseInt(value));
      const data = await fetchFreightData(parseInt(value));
      if (overloaded === "yes" && data) {
        setForm((prevForm) => ({
          ...prevForm,
          driverFreight: data.overLimitTripPrice,
          customerFreight: data.overLimitPrice,
        }));
      } else if (data) {
        setForm((prevForm) => ({
          ...prevForm,
          driverFreight: data.driverFreight,
          customerFreight: data.customerTripPrice,
        }));
      }
    }
  };

  const handleAddEntry = async () => {
    try {
      setEntries([...entries, form]);
      setForm(initialFormState);
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };

  const handleDeleteEntry = async (index: number) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const handleSaveEntries = async () => {
    if (arrange === true) {
      const data = axios.get("http://localhost:5000/entries/allentries");
      data.then((res) => {
        const load = res.data.sort(
          (a: any, b: any) => a.loadingNumber - b.loadingNumber
        );
        const lastEntry = load[load.length - 1];
        const response = axios.post("http://localhost:5000/entries/addentry", {
          loadingNumber: lastEntry.loadingNumber + 1,
          vehicleCode: "NA",
          vehicleType: "NA",
          vehicleNumber: "NA",
          driverName: "NA",
          driverNumber: "NA",
          distance: 0,
          overloaded: "NA",
          driverFreight: 0,
          customerFreight: 0,
          arrangedBy: "self",
        });
    
      });

      setArrange(false);
      setEntries([]);
    } else {
      try {
        for (const entry of entries) {
          const response = await axios.post(
            "http://localhost:5000/entries/addentry",
            entry
          );
          
        }
      } catch (error) {
        console.error("Error saving entries:", error);
      }
      setEntries([]);
    }
  };
  const handleArrange = async () => {
    setArrange(!arrange);
  };

  return (
    <div className="gap-[40px] flex flex-col ml-[280px] mt-2 p-2">
      <div className="flex flex-col w-full flex-wrap">
        <div className="flex mb-5 items-center gap-3">
          <h1 className="font-semibold w-[15rem] text-xl text-gray-500 capitalize">
            Loading Number
          </h1>
          <div className="flex bg-[#818181aa] h-[2px] w-[100%] font-medium"></div>
          <div className="flex gap-5 w-[28rem]">
            <div className="flex border gap-2 w-[20rem] rounded-lg bg-white px-5 text-[#4B4DED] font-bold py-2">
              <p>Self Arrange</p>
              <input
                type="checkbox"
                checked={arrange}
                onChange={handleArrange}
                className="cursor-pointer checkboxx"
              />
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
        {arrange === true ? (
          <h1>Click on Save Button</h1>
        ) : (
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
              <select
                name="overloaded"
                value={overloaded}
                onChange={(e) => setOverloaded(e.target.value)}
                className="w-20 border border-gray-300  rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
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
            {entries.map((entry, index: number) => (
              <div
                key={entry._id || index}
                className="flex mb-3 items-center gap-3"
              >
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
                  onClick={() => handleDeleteEntry(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Loading;
