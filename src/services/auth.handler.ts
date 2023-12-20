import { API } from "@/constants/api.constants";
import { LoginRequest, LoginResponse } from "@/types/auth.types";
import axios, { AxiosResponse } from "axios";

export async function handleLogin(
  request: LoginRequest
): Promise<LoginResponse> {
  try {
    const response: AxiosResponse = await axios.post(API.LOGIN, request);

    if (response.status === 200) {
      return { status: true, message: "Success" };
    } else {
      // If the response status is not 200, but the request was successful
      return { status: false, message: response.data.message || "Failed" };
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Handle 400 or other known error status codes here
      if (error.response.status === 400) {
        return { status: false, message: "Failed - Invalid credentials" };
      }
      return {
        status: false,
        message: error.response.data.message || "Something went wrong",
      };
    } else {
      // Handle unknown errors
      return { status: false, message: "An unexpected error occurred" };
    }
  }
}
