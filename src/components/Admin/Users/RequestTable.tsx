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
    { no: 1, userType: 'Hospital', name: 'Chukwudi Emeka', location: 'Lagos', date: '10/03/24', time: '10:00' },
    { no: 2, userType: 'Researcher', name: 'Aisha Bello', location: 'Abuja', date: '11/03/24', time: '10:30' },
    { no: 3, userType: 'Hospital', name: 'Tunde Adebayo', location: 'Ibadan', date: '12/03/24', time: '11:00' },
    { no: 4, userType: 'Researcher', name: 'Ngozi Okonkwo', location: 'Enugu', date: '13/03/24', time: '11:30' },
    { no: 5, userType: 'Hospital', name: 'Kunle Adewale', location: 'Kano', date: '14/03/24', time: '12:00' },
    { no: 6, userType: 'Researcher', name: 'Fatima Yusuf', location: 'Benin City', date: '15/03/24', time: '12:30' },
    { no: 7, userType: 'Hospital', name: 'Oluwaseun Adekunle', location: 'Port Harcourt', date: '16/03/24', time: '13:00' },
    { no: 8, userType: 'Researcher', name: 'Ifeoma Chukwu', location: 'Ilorin', date: '17/03/24', time: '13:30' },
    { no: 9, userType: 'Hospital', name: 'Segun Okeke', location: 'Jos', date: '18/03/24', time: '14:00' },
    { no: 10, userType: 'Researcher', name: 'Amaka Ndubuisi', location: 'Sokoto', date: '19/03/24', time: '14:30' },
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
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2">User Type</th>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2">Name</th>
                    <th scope="col" className="px-4 py-2 lg:pr-24 lg:py-2">Location</th>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2">date</th>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2"></th>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2"></th>

                  </tr>
                </thead>
                <tbody>
                  {displayData.map((item, index) => (
                    <tr className="border-b dark:border-neutral-500" key={index}>
                      <td className='whitespace-nowrap py-4 lg:px-4'>{item.no}</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>{item.userType}</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>{item.name}</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>{item.location}</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>{item.date}</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>
                          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Accept</button>
                      </td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>
                          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Decline</button>
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
