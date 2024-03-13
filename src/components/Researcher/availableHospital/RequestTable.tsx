import React, { useState } from 'react';
import {
  MenuSquare,
  LucideCircleEllipsis
} from "lucide-react"

import ReactPaginate from 'react-paginate';

interface PageClickEvent {
  selected: number;
}

const RequestTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Set items per page to 6

  const staticData = [
    { no: 1, location: 'Lagos', name: 'Lagoon View Medical Centre' },
    { no: 2, location: 'Abuja', name: 'Capital City Specialist Hospital' },
    { no: 3, location: 'Ibadan', name: 'Ibadan Central Hospital' },
    { no: 4, location: 'Enugu', name: 'Enugu Hilltop Medical Complex' },

  ];
  
  

  const pageCount = Math.ceil(staticData.length / itemsPerPage); // Calculate the number of pages based on static data

  const handlePageClick = ({ selected }: PageClickEvent) => {
    setCurrentPage(selected);
  };

  const displayData = staticData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage); // Slice the data for the current page

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div className="bg-white border-8 border-white ml-6 shadow-lg">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2"> No.</th>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2">Name</th>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2">Location</th>
                    <th scope="col" className="px-4 py-2 lg:pr-24 lg:py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {displayData.map((item, index) => (
                    <tr className="border-b dark:border-neutral-500" key={index}>
                      <td className='whitespace-nowrap py-4 lg:px-4'>{item.no}</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>{item.location}</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>{item.name}</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Select</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination flex"
          pageClassName="page-item mx-1"
          pageLinkClassName="page-link"
          previousClassName="page-item mx-1"
          previousLinkClassName="page-link"
          nextClassName="page-item mx-1"
          nextLinkClassName="page-link"
          breakClassName="page-item mx-1"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default RequestTable;
