"use client";
import React, { useState } from 'react';
import SideNavbar, { SidebarItem } from "@/components/SideNavbar"
import {
  MenuSquare,
  LucideCircleEllipsis
} from "lucide-react"
import { sendReq } from "@/types/research.types";
import { uploadRequest } from "@/researcher.handler";

export default function MakeRequest() {
  const [irbApproval, setIrbApproval] = useState<File | null>(null);
  const [proposal, setProposal] = useState<File | null>(null);
  const [description, setDescription] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!irbApproval || !proposal) {
      alert('Please select all required files');
      return;
    }
    const data: sendReq = {
      MedicalRecordID: 1, // Set this value as needed
      IRBApproval: {
        file: irbApproval,
        fileName: irbApproval.name
      },
      Proposal: {
        file: proposal,
        fileName: proposal.name
      },
      Description: description
    };
    await uploadRequest(data);
  };
  
  return (
    <div className="flex">
      <SideNavbar>
        <SidebarItem icon={<MenuSquare size={20} />} text="Request" active />
      </SideNavbar>
      <div className="flex-1 md:flex h-screen relative">
        <div className="mt-16 flex flex-col w-full">
          <div className="bg-[#F8F8F8] min-h-[100%] flex justify-center items-center">
            <div className="bg-white p-4 w-11/12 h-screen max-h-[98%]">
              <p className="font-semibold text-2xl">Request</p>
              <form onSubmit={handleFormSubmit} className="flex justify-between">
                <div className="w-1/3 p-2">
                  <label htmlFor="irbApproval">IRB Approval</label>
                  <input type="file" id="irbApproval" className="block w-full p-2 border border-gray-300 rounded-md mb-4"
                    onChange={(e) => setIrbApproval(e.target.files ? e.target.files[0] : null)} />
                </div>
                <div className="w-1/3 p-2">
                  <label htmlFor="proposal">Proposal</label>
                  <input type="file" id="proposal" className="block w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) => setProposal(e.target.files ? e.target.files[0] : null)} />
                </div>
                <div className="w-1/3 p-2">
                  <label htmlFor="description">Reason for application</label>
                  <textarea id="description" className="block w-full p-2 border border-gray-300 rounded-md"
                    value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit" className="block w-full p-2 bg-blue-500 text-white rounded-md mt-4">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}