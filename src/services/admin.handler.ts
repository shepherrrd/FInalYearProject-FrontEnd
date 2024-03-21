import { API } from "@/constants/api.constants";
import { BaseResponse, RegistrationRequestResponse } from "@/types/admin.types";
import { UserData } from "@/types/auth.types";
import { getFromLocalStorage } from "@/utilities/localstorage";
import axios from "axios";


function getUserData(): UserData | null {
  const userDataString = localStorage.getItem('user');
  return userDataString ? JSON.parse(userDataString) : null;
}

export async function GetAllRegistrationRequests(): Promise<RegistrationRequestResponse> {
  console.log("hey")//delete
  const userData = getUserData();
  
  if (!userData || !userData.token) {
    console.error('User token is not available.');
    throw new Error('User token is not available.');
  }

  console.log(`Token: ${userData.token}`);// delete

  try {
    const response = await axios.get(API.GET_REGISTRAION_REQUESTS, {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    });

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
  const userData = getUserData();
  
  if (!userData || !userData.token) {//delete
    console.error('User token is not available.');
    throw new Error('User token is not available.');
  }

  try {
    const body = {
      registrationID: id,
      isApproved: isApproved,
    };

    const response = await axios.post(API.UPDATE_REGISTRAION_REQUESTS, body, {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    });

    if (response.status !== 200) {
      return { status: false, message: response.data.message };
    }

    return { status: response.data.status, message: response.data.message };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(`Error response data: ${JSON.stringify(error.response.data)}`);
      return { status: false, message: error.response.data.message };
    } else {
      return { status: false, message: "Failed" };
    }
  }
}
