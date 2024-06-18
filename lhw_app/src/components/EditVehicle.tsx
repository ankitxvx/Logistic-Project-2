import React, { useState } from "react";
import axios from "axios";
import VehicleType from "./VechicleType";

const EditVehicle: React.FC = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    vehicleNumber: "",
    driverName: "",
    driverContactNo: "",
    weightCapacity: "",
    variablePricePerKm: "",
    vehicleCode: "",
    vehicleOwner: "",

    basePrices: [
      {
        rangeFrom: "",
        rangeTo: "",
        basePrice: "",
        overloadBasePrice: "",
        driverBasePrice: "",
        customerBasePrice: "",
        totalPrice: "",
      },
    ],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBasePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newBasePrices = formData.basePrices.map((basePrice, i) => {
      if (i === index) {
        return { ...basePrice, [name]: value };
      }
      return basePrice;
    });
    setFormData((prevData) => ({
      ...prevData,
      basePrices: newBasePrices,
    }));
  };

  const addBasePrice = () => {
    setFormData((prevData) => ({
      ...prevData,
      basePrices: [
        ...prevData.basePrices,
        {
          rangeFrom: "",
          rangeTo: "",
          basePrice: "",
          overloadBasePrice: "",
          driverBasePrice: "",
          customerBasePrice: "",
          totalPrice: "",
        },
      ],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/vehicles",
        formData
      );
      setFormData({
        vehicleType: "",
        vehicleNumber: "",
        driverName: "",
        driverContactNo: "",
        weightCapacity: "",
        variablePricePerKm: "",
        vehicleCode: "",
        vehicleOwner: "",

        basePrices: [
          {
            rangeFrom: "",
            rangeTo: "",
            basePrice: "",
            overloadBasePrice: "",
            driverBasePrice: "",
            customerBasePrice: "",
            totalPrice: "",
          },
        ],
      });
      alert("Vehicle added successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("There was an error adding the vehicle!", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-[#107D9F]">
        Vehicle Details
      </h2>
      {/* Form start */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Vehicle Code
            </label>
            <input
              type="text"
              name="vehicleCode"
              value={formData.vehicleCode}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
              placeholder="aA123"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Vehicle Type
            </label>
            <input
              type="text"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
              placeholder="aA"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Vehicle Number
            </label>
            <input
              type="text"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
              placeholder="#"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Driver Name
            </label>
            <input
              type="text"
              name="driverName"
              value={formData.driverName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
              placeholder="#"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Vehicle Owner
            </label>
            <input
              type="text"
              name="vehicleOwner"
              value={formData.vehicleOwner}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
              placeholder="#"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Driver Contact No
            </label>
            <input
              type="text"
              name="driverContactNo"
              value={formData.driverContactNo}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
              placeholder="#"
            />
          </div>
        </div>

        <VehicleType />

        <div>
          {/* Base Prices */}
          {formData.basePrices.map((basePrice, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex gap-3 mt-6">
                <div className="flex flex-col space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Voucher Option
                  </label>
                  <select
                    name="voucherOption"
                    className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                  >
                    <option value="OFFLINE">OFFLINE</option>
                    <option value="ONLINE">ONLINE</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Range From (KM)
                  </label>
                  <input
                    type="number"
                    name="rangeFrom"
                    value={basePrice.rangeFrom}
                    onChange={(e) => handleBasePriceChange(e, index)}
                    className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                    placeholder="KM"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Range To (KM)
                  </label>
                  <input
                    type="number"
                    name="rangeTo"
                    value={basePrice.rangeTo}
                    onChange={(e) => handleBasePriceChange(e, index)}
                    className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                    placeholder="KM"
                  />
                </div>
              </div>
              {/* second */}
              
              <div className="flex gap-3 mt-6">
              <div className="">
                <label className="block text-sm font-medium text-gray-700">
                  Base Price
                </label>
                <input
                  type="text"
                  name="basePrice"
                  value={basePrice.basePrice}
                  onChange={(e) => handleBasePriceChange(e, index)}
                  className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                  placeholder="#"
                />
              </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Overload Base Price
                  </label>
                  <input
                    type="text"
                    name="overloadBasePrice"
                    value={basePrice.overloadBasePrice}
                    onChange={(e) => handleBasePriceChange(e, index)}
                    className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                    placeholder="#"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Driver Base Price
                  </label>
                  <input
                    type="text"
                    name="driverBasePrice"
                    value={basePrice.driverBasePrice}
                    onChange={(e) => handleBasePriceChange(e, index)}
                    className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                    placeholder="#"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Customer Base Price
                  </label>
                  <input
                    type="text"
                    name="customerBasePrice"
                    value={basePrice.customerBasePrice}
                    onChange={(e) => handleBasePriceChange(e, index)}
                    className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                    placeholder="#"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Total Price
                  </label>
                  <input
                    type="text"
                    name="totalPrice"
                    value={basePrice.totalPrice}
                    onChange={(e) => handleBasePriceChange(e, index)}
                    className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                    placeholder="#"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="mt-4 inline-flex items-center border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-[#107D9F] hover:bg-[#107D9F] px-[16px] py-[12px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
         Submit
        </button>
      </form>
    </div>
  );
};

export default EditVehicle;
