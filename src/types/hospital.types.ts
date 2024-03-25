import { FileData } from "./Signuptypes";

export type decideReq = {
  privateKey: string;
  requestID: Int32Array;
};
export interface RequestResponse {
  description: string;
  irbProposal: string;
  passport: string;
  name: string;
  id: number;
  timeCreated: string;
  timeUpdated: string;
}
export type GetRequestsResponse = {
  status: boolean;
  message: string;
  data?: RequestResponse[];
};

export type UploadRequest = {
  PublicKey: string;
  SDTMDATA: FileData;
  ICDDATA: FileData;
  medicalRecordTypes: number;
  ExponentKey: string;
};

export type displayRequest = {
  id: number;
  description: number;
  name: string;
  isApproved: string;
  time: string;
  timeCreated: string;
};

export type uploadClinicalData = {
  SDTMDATA: FileData;
  ICDDATA: FileData;
  medicalRecordTypes: string;
  PublicKey: string;
};

export interface RequestItems {
  passport: string;
  name: string;
  description: string;
  irbProposal: string;
  irbApproval: string;
  reason: string;
  id:number;
}