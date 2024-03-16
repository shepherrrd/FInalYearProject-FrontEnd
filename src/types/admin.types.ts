import { AccountType } from "./Signuptypes";

export type RegistrationRequests = {
  id: number;
  timeCreated: Date;
  timeUpdated: Date;
  userId: number;
  dateRequested: Date;
  isApproved: boolean;
  userType: AccountType;
  documents?: string; // The '?' signifies that this field is optional
};

export type RegistrationRequestResponse = {
  status: boolean;
  message: string;
  data?: RegistrationRequests[];
};

export type BaseResponse = {
  status: boolean;
  message: string;
};
