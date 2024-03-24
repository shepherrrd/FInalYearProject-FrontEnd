import { FileData } from "./Signuptypes";

export type RequestItem = {
  description: string;
  id: number;
  irbProposalId: number;
  isApproved: boolean;
  name: string;
  status: number; 
  timeCreated: string;
  timeUpdated: string;
};

export type Requests = {
  status: boolean;
  message: string;
  data: RequestItem[];
};

export type sendReq = {
  MedicalRecordID: number;
  email?: string;
  IRBApproval: FileData;
  Proposal: FileData;
  Description: string;
};
  export type GetMedicalRecords = {
    type: number;
  };

  
