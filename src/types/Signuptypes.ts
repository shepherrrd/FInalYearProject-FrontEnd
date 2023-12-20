export enum AccountType {
  Hospital = 1,
  ResearchCenter = 2,
  None = 0,
}
export type FileData = {
  file: File | null;
  fileName: string;
};

export type ResearchCenterSignupDetailsFormData = {
  // Fields from SignupAccountTypeLayoutProps
  accountType: AccountType;
  location: string;

  // Fields from SignupResearchCenterFormLayoutProps
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  institution: string;
  email: string;
  passportPhoto: FileData;
  degree: FileData;
  researchProposal: FileData;
  irbApproval: FileData;

  // Additional password field
  password: string;
  confirmPassword: string;
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
};
