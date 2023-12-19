export enum AccountType {
  Hospital = 1,
  ResearchCenter = 2,
}
export type FileData = {
  file: File | null;
  fileName: string;
};

export type ResearchCenterSignupDetails = {
  // Fields from SignupAccountTypeLayoutProps
  accountType: string;
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
};
