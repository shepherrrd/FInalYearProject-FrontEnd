"use client";
import SideNavbar, { SidebarItem } from "@/components/SideNavbar";
import React, { useEffect, useState } from "react";
import { MenuSquare, LucideCircleEllipsis, User } from "lucide-react";
import ReactPaginate from "react-paginate";
import { RegistrationRequests } from "@/types/admin.types";
import {
  GetAllRegistrationRequests,
  UpdateRegistrationRequests,
} from "@/services/admin.handler";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PageClickEvent {
  selected: number;
}

export default function HospitalDashboard() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Set items per page to 6
  const [staticData, setStaticData] = useState<RegistrationRequests[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const ChangeRequestStatus = async (id: number, isApproved: boolean) => {
    var update = await UpdateRegistrationRequests(id, isApproved);
    if (update.status) {
      toast.success("Request updated successfully");
      return;
    }
    toast.error("Something went wrong");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        var response = await GetAllRegistrationRequests();
        if (!response.status) {
          toast.error("Something went wrong");
          return;
        }
        setStaticData(response.data!);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const pageCount = Math.ceil(staticData.length / itemsPerPage);

  const handlePageClick = ({ selected }: PageClickEvent) => {
    setCurrentPage(selected);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = staticData.filter((item) =>
    item.id.toString().includes(searchTerm)
  );

  const displayData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <ToastContainer />
      {
        <div className="flex">
          <SideNavbar>
            <SidebarItem
              icon={<User size={20} />}
              text="Users"
              active
              alert={undefined}
            />
          </SideNavbar>
          <div className="flex-1 md:flex h-screen relative">
            <div className="mt-16 flex flex-col w-full">
              <div className="bg-[#F8F8F8] min-h-[100%] flex justify-center items-center">
                <div className="bg-white p-4 w-11/12 h-screen max-h-[98%]">
                  <p className="text-2xl font-bold">Users</p>
                  <div className="flex justify-center">
                    <form className="w-[60rem]">
                      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        Search
                      </label>
                      <div className="flex relative w-full">
                        <div className="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search by ID"
                          onChange={handleSearchChange}
                        />
                        <button
                          type="submit"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Search
                        </button>
                        {/* <button
                     type="button"
                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                   >
                     Filter by Status
                   </button> */}
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
                                  <th
                                    scope="col"
                                    className="px-4 py-2 lg:pr-20 lg:py-2"
                                  >
                                    No.
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-4 py-2 lg:pr-20 lg:py-2"
                                  >
                                    ID
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-4 py-2 lg:pr-24 lg:py-2"
                                  >
                                    Approval Status
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-4 py-2 lg:pr-20 lg:py-2"
                                  >
                                    Date Requested
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-4 py-2 lg:pr-20 lg:py-2"
                                  ></th>
                                  <th
                                    scope="col"
                                    className="px-4 py-2 lg:pr-20 lg:py-2"
                                  ></th>
                                </tr>
                              </thead>
                              <tbody>
                                {displayData.map((item, index) => (
                                  <tr
                                    className="border-b dark:border-neutral-500"
                                    key={index}
                                  >
                                    <td className="whitespace-nowrap py-4 lg:px-4">
                                      {index + 1}
                                    </td>
                                    <td className="whitespace-nowrap py-4 lg:px-4">
                                      {item.id}
                                    </td>
                                    <td className="whitespace-nowrap py-4 lg:px-4">
                                      {item.isApproved ? "Approved" : "Pending"}
                                    </td>
                                    <td className="whitespace-nowrap py-4 lg:px-4">
                                      {item.dateRequested
                                        ? new Date(
                                            item.dateRequested
                                          ).toLocaleDateString()
                                        : "N/A"}
                                    </td>
                                    <td className="whitespace-nowrap py-4 lg:px-4">
                                      <button
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() =>
                                          ChangeRequestStatus(item.id, true)
                                        }
                                      >
                                        Accept
                                      </button>
                                    </td>
                                    <td className="whitespace-nowrap py-4 lg:px-4">
                                      <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() =>
                                          ChangeRequestStatus(item.id, false)
                                        }
                                      >
                                        Decline
                                      </button>
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
      }
    </>
  );
}
