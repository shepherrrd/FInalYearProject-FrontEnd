"use client";
import React, { useState, useEffect } from 'react';
import SideNavbar, { SidebarItem } from '@/components/SideNavbar';
import { Send, CopyCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { API } from '@/constants/api.constants';
import { uploadRequest } from '@/researcher.handler';
import { sendReq } from '@/types/research.types';

type MedicalRecord = {
  id: number;
  hospitalName: string;
  recordType: number;
};

export default function MakeRequest() {
  const router = useRouter();
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);
  const [selectedRecord, setSelectedRecord] = useState<number | ''>('');
  const [description, setDescription] = useState<string>('');
  const [irbApproval, setIrbApproval] = useState<File | null>(null);
  const [proposal, setProposal] = useState<File | null>(null);
  const [reason, setReason] = useState<File | null>(null);
  const userData = JSON.parse(localStorage.getItem('user') || '{}');
console.log(userData)

  useEffect(() => {
    const fetchMedicalRecords = async () => {
      try {
        const response = await axios.get(API.GET_MEDICAL_RECORDS, {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        });

        if (response.data && response.data.status === true) {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedRecord === '' || !description || !irbApproval || !proposal || !reason) {
      alert('Please fill in all fields and attach all required files');
      return;
    }

    const requestData: sendReq = {
      MedicalRecordID: selectedRecord,
      Description: description,
      IRBApproval: { file: irbApproval, fileName: irbApproval.name },
      Proposal: { file: proposal, fileName: proposal.name },
      Reason: { file: reason, fileName: reason.name }, // Added Reason file to the request data
    };

    await uploadRequest(requestData);
  };

  return (
    <div className="flex">
      <SideNavbar>
        <SidebarItem icon={<Send size={20} />} text="Send Request" active alert={undefined} onClick={() => router.push('/Researcher/makeRequests')} />
        <SidebarItem icon={<CopyCheck size={20} />} text="Request Status"active={undefined} alert={undefined} onClick={() => router.push('/Researcher/requestStatus')} />
      </SideNavbar>

      <div className="flex-1 md:flex h-screen relative">
        <div className="mt-16 flex flex-col w-full">
          <div className="bg-[#F8F8F8] min-h-[100%] flex justify-center items-center">
            <div className="bg-white p-4 w-11/12 h-screen max-h-[98%]">
              <p className="font-semibold text-2xl">Request</p>
              <form onSubmit={handleSubmit}>
                <label>Description</label>
                <div className="w-full p-2 mb-4">
                  <textarea className="block w-full p-2 border border-gray-300 rounded-md h-32 resize-none" placeholder="Enter your text here..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="flex justify-between">
  <div className="w-1/3 p-2">
    <label htmlFor="file">IRB Approval</label>
    <input type="file" className="block w-full p-2 border border-gray-300 rounded-md mb-4" onChange={(e) => setIrbApproval(e.target.files ? e.target.files[0] : null)} />

    <select className="block w-full p-2 border border-gray-300 rounded-md mb-4" value={selectedRecord} onChange={(e) => setSelectedRecord(e.target.value === '' ? '' : Number(e.target.value))}>
      <option value="">Select a data set</option>
      {medicalRecords.map((record) => (
        <option key={record.id} value={record.id}>
          {`${record.hospitalName} - Type: ${record.recordType} - ID: ${record.id}`}
        </option>
      ))}
    </select>
  </div>
  <div className="w-1/3 p-2">
    <label htmlFor="file">Reason for Application</label>
    <input type="file" className="block w-full p-2 border border-gray-300 rounded-md mb-4" onChange={(e) => setReason(e.target.files ? e.target.files[0] : null)} />
  </div>
  <div className="w-1/3 p-2">
    <label htmlFor="file">Proposal</label>
    <input type="file" className="block w-full p-2 border border-gray-300 rounded-md" onChange={(e) => setProposal(e.target.files ? e.target.files[0] : null)} />
  </div>
</div>
                <button type="submit" className="mt-4 block w-full p-2 bg-blue-500 text-white rounded-md">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}