"use client";
import React, { useState, useEffect } from 'react';
import SideNavbar, { SidebarItem } from "@/components/SideNavbar";
import { MenuSquare } from "lucide-react";
import axios from 'axios';
import { sendReq } from "@/types/research.types";
import { uploadRequest } from "@/researcher.handler";
import { API } from "@/constants/api.constants";

type MedicalRecord = {
  id: number;
  hospitalName: string;
  recordType: number;
};

export default function MakeRequest() {
  const [irbApproval, setIrbApproval] = useState<File | null>(null);
  const [proposal, setProposal] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);
  const [selectedRecordID, setSelectedRecordID] = useState<number | null>(null);

  useEffect(() => {
    const fetchMedicalRecords = async () => {
      try {
        const response = await axios.get(API.GET_MEDICAL_RECORDS);
        if (response.data.status) {
          setMedicalRecords(response.data.data);
        } else {
          console.error('Failed to fetch medical records:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching medical records:', error);
      }
    };
    fetchMedicalRecords();
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!irbApproval || !proposal || !selectedRecordID) {
      alert('Please select all required fields');
      return;
    }
    const data: sendReq = {
      MedicalRecordID: selectedRecordID,
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
                <div className="w-1/3 p-2">
                  <label htmlFor="medicalRecord">Select a Medical Record</label>
                  <select id="medicalRecord" className="block w-full p-2 border border-gray-300 rounded-md mb-4"
  onChange={(e) => setSelectedRecordID(Number(e.target.value))} value={selectedRecordID || ''}>
  <option value="">Select a record</option>
  {medicalRecords.map(record => (
    <option key={record.id} value={record.id}>
      {record.hospitalName} - {record.recordType}
    </option>
  ))}
</select>
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