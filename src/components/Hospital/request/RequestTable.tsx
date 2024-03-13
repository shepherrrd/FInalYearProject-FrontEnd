import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

interface PageClickEvent {
  selected: number;
}

const RequestTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Set items per page to 6

  const staticData = [
    { no: 1, reqNo: 12345, name: 'Chukwudi Emeka', date: '10/03/24', time: '10:00' },
    { no: 2, reqNo: 12346, name: 'Aisha Bello', date: '11/03/24', time: '10:30' },
    { no: 3, reqNo: 12347, name: 'Tunde Adebayo', date: '12/03/24', time: '11:00' },
    { no: 4, reqNo: 12348, name: 'Ngozi Okonkwo', date: '13/03/24', time: '11:30' },
    { no: 5, reqNo: 12349, name: 'Kunle Adewale', date: '14/03/24', time: '12:00' },
    { no: 6, reqNo: 12350, name: 'Fatima Yusuf', date: '15/03/24', time: '12:30' },
    { no: 7, reqNo: 12351, name: 'Oluwaseun Adekunle', date: '16/03/24', time: '13:00' },
    { no: 8, reqNo: 12352, name: 'Ifeoma Chukwu', date: '17/03/24', time: '13:30' },
    { no: 9, reqNo: 12353, name: 'Segun Okeke', date: '18/03/24', time: '14:00' },
    { no: 10, reqNo: 12354, name: 'Amaka Ndubuisi', date: '19/03/24', time: '14:30' },
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
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2">No.</th>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2">Req.no</th>
                    <th scope="col" className="px-4 py-2 lg:pr-24 lg:py-2">Name</th>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2">Date</th>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2">Time</th>
                    <th scope="col" className="px-4 py-2 lg:pr-20 lg:py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {displayData.map((item, index) => (
                    <tr className="border-b dark:border-neutral-500" key={index}>
                      <td className='whitespace-nowrap py-4 lg:px-4'>{item.no}</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>{item.reqNo}</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>{item.name}</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>{item.date}</td>
                      <td className='whitespace-nowrap py-4 lg:px-4'>{item.time}</td>
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
