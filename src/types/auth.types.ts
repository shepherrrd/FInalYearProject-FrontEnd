import { AccountType } from "./Signuptypes";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  status: boolean;
  message: string;
  data?: UserData;
};

export type UserData = {
  userId: number;
  email: string;
  firstName: string;
  lastName: string | null;
  middleName: string | null;
  userType: AccountType;
  accountStatus: number;
  roleId: number;
  roleText: string | null;
  token: string;
  privileges: any; // Adjust the type based on what 'privileges' contains
  refferalMsgBody: string | null;
  expires: number;
  isEmailVerified: boolean;
};
