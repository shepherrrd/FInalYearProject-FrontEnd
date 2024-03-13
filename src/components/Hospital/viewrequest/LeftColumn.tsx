import React from 'react';

const LeftColumn = () => {
  return (
    <div className='mt-16 flex justify-center items-center md:w-[30%] bg-[#F8F8F8] min-h-[60%]'>
      <div className='bg-white p-4 rounded-lg shadow-lg text-center w-3/4 h-5/6 flex flex-col justify-between'>
        <div>
          <img className="w-32 h-32 mb-4 rounded-full mx-auto ring-2 ring-gray-300" src="/avatar1.png" alt="Bordered avatar" />
          <h3 className="text-lg font-semibold">John Doe</h3>
          <p className="mb-2">Institution, State</p>
          <p className="mb-4">Nigeria</p>
        </div>
        <div className="flex flex-col space-y-4 mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full h-12 text-center">View Request</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full h-12 text-center">IRB Approval</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full h-12 text-center">Proposal</button>
        </div>
        <div className="flex justify-around pb-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold rounded w-32 h-12">Reject</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold rounded w-32 h-12">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
