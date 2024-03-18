"use client";
import SideNavbar, { SidebarItem } from "@/components/SideNavbar"
import Header, { HeaderName } from "@/components/Header"

import OneColumn from "@/components/Researcher/makeRequest/Onecolumn";
import {
  MenuSquare,
  LucideCircleEllipsis
} from "lucide-react"


export default function makeRequest(){
  return (
    <div className="flex">
      <SideNavbar>
        <SidebarItem  icon={<MenuSquare size={20} />} text="Request" active alert={undefined} />
      </SideNavbar>
      <div className="flex-1 md:flex h-screen relative">
      <div className="mt-16 flex flex-col w-full">
    <div className="bg-[#F8F8F8] min-h-[100%] flex justify-center items-center">

        <div className="bg-white p-4 w-11/12 h-screen max-h-[98%]  ">
<p className="font-semibold text-2xl">Request</p>

<div className="flex justify-between">
  <div className="w-1/3 p-2">
  <label htmlFor="file">IRB Approval</label>
    <input type="file" className="block w-full p-2 border border-gray-300 rounded-md mb-4" />

    <select className="block w-full p-2 border border-gray-300 rounded-md mb-4">
      <option value="">Select a data set</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    <button type="submit" className="block w-full p-2 bg-blue-500 text-white rounded-md">Submit</button>
  </div>
  <div className="w-1/3 p-2">
  <label>Proposal</label>
    <input type="file" className="block w-full p-2 border border-gray-300 rounded-md" />
  </div>
  <div className="w-1/3 p-2">
  <label>Reason for application</label>
    <input type="file" className="block w-full p-2 border border-gray-300 rounded-md" />
  </div>
</div>

        </div>
    </div>
</div>
      </div>
      </div>

  )
}

