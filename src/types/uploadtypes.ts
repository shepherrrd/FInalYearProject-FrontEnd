import { FileData } from "./Signuptypes";

export type uploadData = {
    SDTMDATA: FileData;
    ICDDATA: FileData;
    medicalRecordTypes: Int32Array;
    PublicKey: string;
};
