import { FileData } from "./Signuptypes";

export type Requests = {
  status: string;
  message: string;
  data: String[];
};


export type sendReq = {
    MedicalRecordID: number;
    email: string;
    IRBApproval: FileData;
    Proposal: FileData;
    Description: string;
  };

  