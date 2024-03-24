"use client";
import SideNavbar, { SidebarItem } from "@/components/SideNavbar";
import { UploadCloud, CopyCheck } from "lucide-react";
import router from "next/router";
import { useEffect, useState } from "react";
import { RequestItems } from "@/hospital.types";
export default function HospitalDashboard() {
  const [selectedItem, setSelectedItem] = useState<RequestItems | null>(null);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("selectedItem") || '{}') as RequestItems;
    setSelectedItem(item);
  }, []);

  return (
    <div className="flex">
      <SideNavbar>
        <SidebarItem 
          icon={<UploadCloud size={20} />}
          text="Upload"
          active={undefined}
          alert={undefined}
          onClick={() => router.push("/Hospital/upload")}
        />
        <SidebarItem
          icon={<CopyCheck size={20} />}
          text="Requests"
          alert
          active
          onClick={() => router.push("/Hospital/request")}
        />
      </SideNavbar>
      <div className="flex-1 md:flex h-screen relative">
        <div className="mt-16 flex justify-center items-center md:w-[30%] bg-[#F8F8F8] min-h-[60%]">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center w-3/4 h-5/6 flex flex-col justify-between">
            <div>
            <img
        className="w-32 h-32 mb-4 rounded-full mx-auto ring-2 ring-gray-300"
        src={selectedItem?.passport || "/avatar1.png"}
        alt="Bordered avatar"
      />
      <h3 className="text-lg font-semibold">
        {selectedItem?.name || "John Doe"}
      </h3>
              <p className="mb-2">Institution, State</p>
              <p className="mb-4">Nigeria</p>
            </div>
            <div className="flex flex-col space-y-4 mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full h-12 text-center"
              onClick={() => selectedItem && window.open(selectedItem.reason, '_blank')}
              >
                View Request
              </button>
              <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full h-12 text-center"
  onClick={() => selectedItem && window.open(selectedItem.irbApproval, '_blank')}
>
  IRB Approval
</button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full h-12 text-center"
                onClick={() => selectedItem && window.open(selectedItem.irbProposal, '_blank')}
              >
                Proposal
              </button>
            </div>
            <div className="flex justify-around pb-4">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold rounded w-32 h-12">
                Reject
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold rounded w-32 h-12">
                Accept
              </button>
            </div>
          </div>
        </div>
        <div className="md:mt-16 flex flex-col items-center md:w-[70%] bg-[#F8F8F8] min-h-[60%]">
          <div className="bg-white w-11/12 h-5/6 mt-2 p-4 overflow-y-auto">
            <p className="text-2xl font-bold">Reason for application</p>
            <div>
            <p className="p-4">
        {selectedItem?.description || "Malaria has long been a scourge..."}
      </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
