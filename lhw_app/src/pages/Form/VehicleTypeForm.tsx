import React, { useState } from "react";

interface FormData {
  vehicleType: string;
  kmRange: string;
  numberOfDrivers: string;
  capacity: string;
  customVehicleType: string;
}

const VehicleTypeForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    vehicleType: "",
    kmRange: "",
    numberOfDrivers: "",
    capacity: "",
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
      const response = await fetch(
        "http://localhost:5000/vehicles/addvehicle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalFormData),
        }
      );

      if (response.ok) {
        console.log("Vehicle data saved successfully!");
        togglePopup();
        setFormData({
          vehicleType: "",
          customVehicleType: "",
          kmRange: "",
          numberOfDrivers: "",
          capacity: "",
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
        className="bg-[#107D9F] text-white px-4 py-2  rounded"
        onClick={togglePopup}
      >
        + Add Vehicle
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={togglePopup}
        >
          <div
            className="bg-white p-6 rounded shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
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
                    <option value="tuktuk">Tuk Tuk</option>
                    <option value="chotaHathi">Chota Hathi</option>
                    <option value="pickup">Pickup</option>
                    <option value="other">Other</option>
                  </select>
                  <div>
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
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="kmRange"
                >
                  Number of Km Range
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="kmRange"
                  name="kmRange"
                  type="number"
                  placeholder="Km..."
                  value={formData.kmRange}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="numberOfDrivers"
                >
                  Number of Drivers
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="numberOfDrivers"
                  name="numberOfDrivers"
                  type="number"
                  placeholder="Drivers..."
                  value={formData.numberOfDrivers}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="capacity"
                >
                  Capacity
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="capacity"
                  name="capacity"
                  type="number"
                  placeholder="Capacity.. in Kg"
                  value={formData.capacity}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-between">
                <button
                  className="text-[#107D9F] border-[#107D9F] px-4 py-2 rounded"
                  type="button"
                  onClick={togglePopup}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#107D9F] text-white px-4 py-2 rounded"
                  type="submit"
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

export default VehicleTypeForm;
