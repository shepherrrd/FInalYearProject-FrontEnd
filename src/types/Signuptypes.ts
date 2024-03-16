import { List } from "postcss/lib/list";

export enum AccountType {
  Admin = 1,
  Hospital = 2,
  ResearchCenter = 3,
  None = 4,
}

export type FileData = {
  file: File | null;
  fileName: string;
};

export type ResearchCenterSignupDetailsFormData = {
  // Fields from SignupAccountTypeLayoutProps
  AccountType: AccountType;
  Location: string;

  // Fields from SignupResearchCenterFormLayoutProps
  Title: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Institution: string;
  Email: string;
  PassportPhoto: FileData;
  Degree: FileData;
  ResearchProposal: FileData;
  IrbApproval: FileData;

  // Additional password field
  Password: string;
  ConfirmPassword: string;
};

export type HospitalSignupDetailsFormData = {
  accountType: AccountType;
  Location: string;
  HospitalName: string;
  HospitalEmail: string;
  WebsiteAddress: string;
  CacDocument: FileData;
  NafdacDocument: FileData;
  Password: string;
  ConfirmPassword: string;
};

export type SignupApiResponse = {
  status: boolean;
  message: string;
  erroData?: string[];
};

export type OTP = {
  signupsessionkey: string;
  code: string;
};
