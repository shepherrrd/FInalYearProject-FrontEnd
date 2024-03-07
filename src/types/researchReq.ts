import { FileData } from "./Signuptypes";

export type sendReq = {
    MedicalRecordID: number;
    email: string;
    IRBApproval: FileData;
    Proposal: FileData;
    Description: string;
  };

  