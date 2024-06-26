import React from "react";

const Logistic = () => {
    const data = [
        {
          loadingNo: 61,
          partyName: "Mohan Constructor",
          location: "Location A",
          kmRange: 10,
          toll: "Paid",
          vehicleCode: "VC-101",
          vehicleType: "Truck",
          vehicleNumber: "AB1234",
          driverName: "John Doe",
          customerFinalFreight: "$1000",
          driverFinalFreight: "$500",
          profit: "$500",
          paymentCash: "$1000",
          exFor: "Ex",
        },
        {
          loadingNo: 62,
          partyName: "RS Construction",
          location: "Location B",
          kmRange: 15,
          toll: "Unpaid",
          vehicleCode: "VC-102",
          vehicleType: "Van",
          vehicleNumber: "CD5678",
          driverName: "Jane Smith",
          customerFinalFreight: "$1200",
          driverFinalFreight: "$600",
          profit: "$600",
          paymentCash: "$1200",
          exFor: "For",
        },
        {
          loadingNo: 63,
          partyName: "XYZ Builders",
          location: "Location C",
          kmRange: 20,
          toll: "Paid",
          vehicleCode: "VC-103",
          vehicleType: "Lorry",
          vehicleNumber: "EF9101",
          driverName: "Peter Brown",
          customerFinalFreight: "$1500",
          driverFinalFreight: "$700",
          profit: "$800",
          paymentCash: "$1500",
          exFor: "Ex",
        },
        {
          loadingNo: 64,
          partyName: "ABC Ltd.",
          location: "Location D",
          kmRange: 25,
          toll: "Unpaid",
          vehicleCode: "VC-104",
          vehicleType: "Bus",
          vehicleNumber: "GH2345",
          driverName: "Nancy Wilson",
          customerFinalFreight: "$1800",
          driverFinalFreight: "$800",
          profit: "$1000",
          paymentCash: "$1800",
          exFor: "For",
        },
        {
          loadingNo: 65,
          partyName: "LMN Corp.",
          location: "Location E",
          kmRange: 30,
          toll: "Paid",
          vehicleCode: "VC-105",
          vehicleType: "Car",
          vehicleNumber: "IJ6789",
          driverName: "Gary White",
          customerFinalFreight: "$2000",
          driverFinalFreight: "$900",
          profit: "$1100",
          paymentCash: "$2000",
          exFor: "Ex",
        },
      ];
  return (
    <>
      <div className="ml-[250px]">
        <div className="flex justify-between m-5">
        <h1 className="text-[#107D9F] text-2xl mb-0">
            Transport Details
        </h1>
        </div>
        <div className="overflow-x-auto  overflow-y-auto  m-5">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2">
                  Loading No.
                </th>
                <th className="border border-gray-300 px-3 py-2">
                  Party Name
                </th>
                <th className="border border-gray-300 px-3 py-2">
                  Location
                </th>
                <th className="border border-gray-300 px-3 py-2">
                  KM Range
                </th>
                <th className="border border-gray-300 px-3 py-2">
                  Toll
                </th>
                <th className="border border-gray-300 px-3 py-2">
                  Vehicle Code
                </th>
                <th className="border border-gray-300 px-3 py-2">
                  Vehicle Type
                </th>
                <th className="border border-gray-300 px-3 py-2">
                  Vehicle Number
                </th>
                <th className="border border-gray-300 px-3 py-2">
                  Driver Name
                </th>
                <th className="border border-gray-300 px-3 py-2">
                  Customer Final Freight
                </th>
                <th className="border border-gray-300 px-3 py-2">
                  Driver Final Freight
                </th>
                <th className="border border-gray-300 px-3 py-2">
                  Profit
                </th>
                <th className="border border-gray-300 px-3 py-2">
                  Payment Cash
                </th>
                <th className="border border-gray-300 px-3 py-2">
                  EX/FOR
                </th>
              </tr>
            </thead>
            <tbody>
            {data.map((freight, index) => (
              <tr key={index}>
                <td className="border border-gray-200 px-3 py-2">{freight.loadingNo}</td>
                <td className="border border-gray-200 px-3 py-2">{freight.partyName}</td>
                <td className="border border-gray-200 px-3 py-2">{freight.location}</td>
                <td className="border border-gray-200 px-3 py-2">{freight.kmRange}</td>
                <td className="border border-gray-200 px-3 py-2">{freight.toll}</td>
                <td className="border border-gray-200 px-3 py-2">{freight.vehicleCode}</td>
                <td className="border border-gray-200 px-3 py-2">{freight.vehicleType}</td>
                <td className="border border-gray-200 px-3 py-2">{freight.vehicleNumber}</td>
                <td className="border border-gray-200 px-3 py-2">{freight.driverName}</td>
                <td className="border border-gray-200 px-3 py-2">{freight.customerFinalFreight}</td>
                <td className="border border-gray-200 px-3 py-2">{freight.driverFinalFreight}</td>
                <td className="border border-gray-200 px-3 py-2">{freight.profit}</td>
                <td className="border border-gray-200 px-3 py-2">{freight.paymentCash}</td>
                <td className="border border-gray-200 px-3 py-2">{freight.exFor}</td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Logistic;
