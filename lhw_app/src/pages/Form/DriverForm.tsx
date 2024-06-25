import React, { useState } from "react";

interface Driver {
    sn: string;
    vehicleType: string;
    driverName: string;
    vehicleCode: string;
    vehicleNumber: string;
    driverPhone: string;
    customVehicleType: string;
  }

const DriverForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Driver>({
    sn: "",
    vehicleType: "",
    driverName: "",
    vehicleCode: "",
    vehicleNumber: "",
    driverPhone: "",
    customVehicleType: "",
  });
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "vehicleType" &&
        value !== "other" && { customVehicleType: "" }),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalFormData = {
      ...formData,
      vehicleType:
        formData.vehicleType === "other"
          ? formData.customVehicleType
          : formData.vehicleType,
    };
    try {
      const response = await fetch("http://localhost:5000/drivers/adddriver", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalFormData),
      });
      if (response.ok) {
        console.log("Driver Form data saved successfully!");
        togglePopup();
        setFormData({
            sn: "",
            vehicleType: "",
            driverName: "",
            vehicleCode: "",
            vehicleNumber: "",
            driverPhone: "",
            customVehicleType: "",
        });
      } else {
        console.error("Failed to save form data");
      }
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };

  return (
    <div className="">
      <button
        className="bg-[#107D9F] text-white px-4 py-2 rounded"
        onClick={togglePopup}
      >
        + Add Driver
      </button>

      {isOpen && (
        <div
          className="mt-20 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={togglePopup}
        >
          <div
            className="bg-white p-6 rounded shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="vehicleType"
                >
                  Vehicle Type
                </label>
                <div className="relative">
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a vehicle type...
                    </option>
                    <option value="Tuk Tuk">Tuk Tuk</option>
                    <option value="Chota Hathi">Chota Hathi</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Other">Other</option>
                  </select>
                  <div>
                  </div>
                  {formData.vehicleType === "Other" && (
                    <input
                      type="text"
                      className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="customVehicleType"
                      name="customVehicleType"
                      placeholder="Enter vehicle type"
                      value={formData.customVehicleType}
                      onChange={handleChange}
                    />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Driver
                  </label>
                  <input
                    type="text"
                    name="driverName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Driver Name"
                    value={formData.driverName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Vehicle Code
                  </label>
                  <input
                    type="text"
                    name="vehicleCode"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Vehicle Code"
                    value={formData.vehicleCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Vehicle Number
                  </label>
                  <input
                    type="text"
                    name="vehicleNumber"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Vehicle Number"
                    value={formData.vehicleNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Driver Phone
                  </label>
                  <input
                    type="number"
                    name="driverPhone"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Driver Phone Number"
                    value={formData.driverPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={togglePopup}
                  className="text-[#107D9F] border-[#107D9F] px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#107D9F] text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverForm;
