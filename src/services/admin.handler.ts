import { API } from "@/constants/api.constants";
import { BaseResponse, RegistrationRequestResponse } from "@/types/admin.types";
import { UserData } from "@/types/auth.types";
import { getFromLocalStorage } from "@/utilities/localstorage";
import axios from "axios";

export async function GetAllRegistrationRequests(): Promise<RegistrationRequestResponse> {
  try {
    const response = await axios.get(API.GET_REGISTRAION_REQUESTS);
    if (response.status !== 200) {
      return {
        status: false,
        message: response.data.message,
        data: response.data.data,
      };
    }
    return {
      status: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { status: false, message: error.response.data.message };
    } else {
      return { status: false, message: "Failed" };
    }
  }
}

export async function UpdateRegistrationRequests(
  id: number,
  isApproved: boolean
): Promise<BaseResponse> {
  try {
    const body = {
      registrationID: id,
      isApproved: isApproved,
    };

    var user = await getFromLocalStorage<UserData>("user");
    var token = "Bearer" + user?.token;
    const response = await axios.post(API.UPDATE_REGISTRAION_REQUESTS, body, {
      headers: {
        "Content-Type": "Application/json",
        Authorization: token,
      },
    });

    if (response.status !== 200) {
      return { status: false, message: response.data.message };
    }

    return { status: response.data.status, message: response.data.message };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { status: false, message: error.response.data.message };
    } else {
      return { status: false, message: "Failed" };
    }
  }
}
