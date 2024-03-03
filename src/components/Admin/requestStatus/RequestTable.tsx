import React from 'react';

const RequestTable = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div className="bg-white border-8 border-white ml-6 shadow-lg">
              <p className=" text-base font-bold mt-5">Requests</p>
              <table className="min-w-full text-left text-sm font-light">
                <caption className="caption-bottom">
                  <button className="mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                   View More
                  </button>
                </caption>
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2">No.</th>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2">Req.no</th>
                    <th scope="col" className="px-4 py-2 lg:pr-24 lg:py-2">Name</th>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2">Date</th>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2">Time</th>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* demo*/}
                  {[...Array(6)].map((_, i) => (
                    <tr className="border-b dark:border-neutral-500" key={i}>
                      <td className='whitespace-nowrap py-4 lg:px-4'>
                          <a>{i + 1}</a>
                      </td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>6465</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>Alex Noman</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>23/01/23</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>09:09</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestTable;
