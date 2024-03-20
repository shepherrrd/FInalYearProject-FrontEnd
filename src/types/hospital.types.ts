import { FileData } from "./Signuptypes";

export type decideReq = {
    privateKey: string;
    requestID: Int32Array;
};

export type Requests = {
    status: string;
    message: string;
    data: String[];
};

export type displayRequest = {
    no: number;
    reqNo: number;
    name: string;
    date: string;
    time: string;
  };


export type uploadClinicalData = {
    SDTMDATA: FileData;
    ICDDATA: FileData;
    medicalRecordTypes: string;
    PublicKey: string;
}