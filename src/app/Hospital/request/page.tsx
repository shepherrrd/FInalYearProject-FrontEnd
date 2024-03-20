"use client";
import React, { useEffect, useState } from 'react';
import SideNavbar, { SidebarItem } from "@/components/SideNavbar"
import { UploadCloud, CopyCheck, LayoutDashboard } from "lucide-react"
import { useRouter } from "next/navigation"; 
import ReactPaginate from 'react-paginate';
import {displayRequest} from '@/hospital.types'
interface PageClickEvent {
  selected: number;
}



export default function Hospitalreq() {
  const router = useRouter(); 
  const [currentPage, setCurrentPage] = useState(0);
  const [requestData, setRequestData] = useState<displayRequest[]>([]);
  const itemsPerPage = 6; // Set items per page to 6

  useEffect(() => {
    // Retrieve data from localStorage and parse it
    const storedData = localStorage.getItem('hospitalrequests');
    if (storedData) {
      const parsedData = JSON.parse(storedData).data;
      setRequestData(parsedData);
    }
  }, []);

  const pageCount = Math.ceil(requestData.length / itemsPerPage); // Calculate the number of pages based on request data

  const handlePageClick = ({ selected }: PageClickEvent) => {
    setCurrentPage(selected);
  };

  const displayData = requestData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage); // Slice the data for the current page

  return (
    <div className="flex">
      <SideNavbar>
        <SidebarItem icon={<UploadCloud size={20} />} text="Upload" active={undefined} alert={undefined} onClick={() => router.push('/Hospital/upload')}  />
        <SidebarItem icon={<CopyCheck size={20} />} text="Requests" alert active onClick={() => router.push('/Hospital/request')} />
      </SideNavbar>    <div className="flex-1 md:flex h-screen relative">
      <div className="mt-16 flex flex-col w-full">
    <div className="bg-[#F8F8F8] min-h-[100%] flex justify-center items-center">
        <div className="bg-white p-4 w-11/12 h-screen max-h-[98%]  ">
        <p className="text-2xl font-bold">Users</p>
        <div className="flex justify-center">
          <form className="w-[60rem]">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="flex relative w-full">
                  <div className="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for upload" />
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Filter</button>
                  
              </div>
          </form>
      </div>

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
        </div>
    </div>
</div>
      </div>
      </div>
  )
}