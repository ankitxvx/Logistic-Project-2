 

import React, { useState } from 'react';

const FreightListForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        className='bg-[#107D9F] text-white px-4 py-2 rounded'
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
            
            <form className=''> 
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Vehicle Type
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 
                  type="text"
                  placeholder="Vechicle..."
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Number of Km Range
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 
                  type="number"
                  placeholder="Km..."
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Number of Drivers
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 
                  type="number"
                  placeholder="Drivers..."
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Capacity
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  
                  type="number"
                  placeholder="Capacity.. in Kg"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="text-[#107D9F]  border-[#107D9F] px-4 py-2 rounded  "
                  type="submit"
                >
                  Cancel
                </button>
                <button
                  className="bg-[#107D9F] text-white px-4 py-2 rounded "
                  onClick={togglePopup}
                  type="button"
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
