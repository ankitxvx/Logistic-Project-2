import React, { useState } from "react";

interface FormData {
  vehicleType: string;
  distance: string;
  totalKm: string;
  driverFreight: string;
  overLimitTripPrice: string;
  customerTripPrice: string;
  overLimitPrice: string;
  minTime: string;
  maxTime: string;
  customVehicleType: string;
}

const FreightListForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    vehicleType: "",
    distance: "",
    totalKm: "",
    driverFreight: "",
    overLimitTripPrice: "",
    customerTripPrice: "",
    overLimitPrice: "",
    minTime: "",
    maxTime: "",
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
      ...(name === "vehicleType" && value !== "other" && { customVehicleType: "" }),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalFormData = {
      ...formData,
      vehicleType: formData.vehicleType === "other" ? formData.customVehicleType : formData.vehicleType,
    };
    try {
      const response = await fetch("http://localhost:5000/freights/addfreight", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalFormData),
      });
      if (response.ok) {
        console.log("Freight data saved successfully!");
        togglePopup();
        setFormData({
          vehicleType: "",
          distance: "",
          totalKm: "",
          driverFreight: "",
          overLimitTripPrice: "",
          customerTripPrice: "",
          overLimitPrice: "",
          minTime: "",
          maxTime: "",
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
        + Add Freight
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
                    onChange={handleChange} // Corrected onChange handler
                  >
                    <option value="" disabled>
                      Select a vehicle type...
                    </option>
                    <option value="Tuk Tuk">Tuk Tuk</option>
                    <option value="Chota Hathi">Chota Hathi</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Truck">Truck</option>
                  </select>
                </div>
                {formData.vehicleType === "other" && (
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
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Distance
                  </label>
                  <input
                    type="number"
                    name="distance"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Distance in KM"
                    value={formData.distance}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Total KM
                  </label>
                  <input
                    type="number"
                    name="totalKm"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Total KM"
                    value={formData.totalKm}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Driver Freight
                  </label>
                  <input
                    type="number"
                    name="driverFreight"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Driver Freight"
                    value={formData.driverFreight}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Over Limit Trip Price
                  </label>
                  <input
                    type="number"
                    name="overLimitTripPrice"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Over Time Freight Price"
                    value={formData.overLimitTripPrice}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Customer Trip Price
                  </label>
                  <input
                    type="number"
                    name="customerTripPrice"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Customer Trip Price"
                    value={formData.customerTripPrice}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Over Limit Price
                  </label>
                  <input
                    type="number"
                    name="overLimitPrice"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Over Limit Price"
                    value={formData.overLimitPrice}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Minimum Time
                  </label>
                  <input
                    type="number"
                    name="minTime"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Minimum Time"
                    value={formData.minTime}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Maximum Time
                  </label>
                  <input
                    type="number"
                    name="maxTime"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Maximum Time"
                    value={formData.maxTime}
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

export default FreightListForm;
