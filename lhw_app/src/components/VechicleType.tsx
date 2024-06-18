import React, { useState } from "react";

interface FormData {
  voucherOption: "OFFLINE" | "ONLINE";
  vehicleType: string;
  kmRange: string;
  driverCode: string;
  tollAmount: number;
  customerFreight: number;
  driverFreight: number;
  customerFreightPaidBy: "CIPL" | "CASH" | "DRIVER";
  distance: number;
  totalKm: number;
  limitTrip: number;
  overTimePrice: number;
  minimum: number;
  maximum: number;
  totalTime: number;
}

const VehicleType: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    voucherOption: "OFFLINE",
    vehicleType: "",
    kmRange: "",
    driverCode: "",
    tollAmount: 0,
    customerFreight: 0,
    driverFreight: 0,
    customerFreightPaidBy: "CIPL",
    distance: 0,
    totalKm: 0,
    limitTrip: 0,
    overTimePrice: 0,
    minimum: 0,
    maximum: 0,
    totalTime: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "tollAmount" ? Number(value) : value,
    }));
  };

  const handleTollAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tollAmount = Number(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      tollAmount,
      customerFreight: prevData.customerFreight + tollAmount,
      driverFreight: prevData.driverFreight + tollAmount,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <div className="">
        <h2 className="text-2xl font-semibold mb-4 text-[#107D9F]">
          Vehicle Price
        </h2>
        <form className="space-y-4 flex flex-col " onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            {/* <div className="flex flex-col space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Voucher Option
          </label>
          <select
            name="voucherOption"
            value={formData.voucherOption}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
          >
            <option value="OFFLINE">OFFLINE</option>
            <option value="ONLINE">ONLINE</option>
          </select>
        </div> */}

            {/* <div className="flex flex-col space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            KM Range
          </label>
          <input
            type="text"
            name="kmRange"
            value={formData.kmRange}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
            placeholder="Enter KM Range"
          />
        </div> */}
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Vehicle Type
              </label>
              <input
                type="text"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                placeholder="Enter Vehicle Type"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Distance
              </label>
              <input
                type="number"
                name="distance"
                value={formData.distance}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                placeholder="Enter distance"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Total KM
              </label>
              <input
                type="number"
                name="totalKm"
                value={formData.totalKm}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                placeholder="Enter Vehicle Type"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Total Time
              </label>
              <input
                type="number"
                name="totalTime"
                value={formData.totalTime}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                placeholder="Enter Vehicle Type"
              />
            </div>

            {/* <div>
              <h1>CUSTOMER PRICE + TOLL ANY</h1>
              <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Customer Freight
              </label>
              <input
                type="number"
                name="tollAmount"
                value={formData.tollAmount}
                onChange={handleTollAmountChange}
                className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                placeholder="Enter Toll Amount"
              />
            </div>
              <div className="flex flex-col space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                 OverTime Freight
                </label>
                <input
                  type="number"
                  name="overTimePrice"
                  value={formData.overTimePrice}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                  placeholder="Enter Vehicle Type"
                />
              </div>
            </div>
            <div>
                <h1>CUSTOMER ESTIMATED TIME DELIVERY</h1>
                <div className="flex flex-col space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                 Maximum
                </label>
                <input
                  type="number"
                  name="maximum"
                  value={formData.maximum}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                  placeholder="Enter Vehicle Type"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                 Minimum
                </label>
                <input
                  type="number"
                  name="minimum"
                  value={formData.minimum}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                  placeholder="Enter Vehicle Type"
                />
              </div>

            </div> */}
          </div>
          {/* <div className="flex space-x-4">
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700"></label>
              <select
                name="customerFreightPaidBy"
                value={formData.customerFreightPaidBy}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
              >
                <option value="CIPL">CIPL</option>
                <option value="CASH">CASH</option>
                <option value="DRIVER">DRIVER</option>
              </select>
            </div>
          </div> */}
          <div className="flex gap-3 ">
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Capacity
              </label>
              <input
                type="text"
                name="kmRange"
                value={formData.kmRange}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                placeholder="Enter KM Range"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700">
              OVER LIMIT TRIP PRICE
              </label>
              <input
                type="number"
                name="limitTrip"
                value={formData.limitTrip}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                placeholder="Enter Vehicle Type"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Overtime Freight
              </label>
              <input
                type="number"
                name="customerFreight"
                value={formData.customerFreight}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                placeholder="Customer Freight"
                disabled
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Drive Freight
              </label>
              <input
                type="text"
                name="driverCode"
                value={formData.driverCode}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                placeholder="Enter Driver Code"
              />
            </div>
          </div>

          <div>
            <div className=" border-solid-gray rounded-lg border-2 p-2 mt-4">
              <h1 className="mb-3">CUSTOMER ESTIMATED TIME DELIVERY</h1>
              <div className="flex gap-2">
                <div className="flex flex-col space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Maximum
                  </label>
                  <input
                    type="number"
                    name="maximum"
                    value={formData.maximum}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                    placeholder="Enter Vehicle Type"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Minimum
                  </label>
                  <input
                    type="number"
                    name="minimum"
                    value={formData.minimum}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                    placeholder="Enter Vehicle Type"
                  />
                </div>
              </div>
            </div>
            <div className="border-solid-gray rounded-lg border-2 p-2 mt-4">
              <h1 className="mb-2">CUSTOMER PRICE + TOLL ANY</h1>
              <div className="flex gap-2">
              <div className="flex flex-col space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Customer Freight
                </label>
                <input
                  type="number"
                  name="tollAmount"
                  value={formData.tollAmount}
                  onChange={handleTollAmountChange}
                  className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                  placeholder="Enter Toll Amount"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  OverTime Freight
                </label>
                <input
                  type="number"
                  name="overTimePrice"
                  value={formData.overTimePrice}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-400 border-2 p-2 rounded-md shadow-sm"
                  placeholder="Enter Vehicle Type"
                />
              </div>
              </div>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default VehicleType;
