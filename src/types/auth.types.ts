export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  status: boolean;
  message: string;
};
