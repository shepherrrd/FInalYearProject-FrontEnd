import { API } from "@/constants/api.constants";
import { BaseResponse } from "@/types/admin.types";
import { UserData } from "@/types/auth.types";
import { Requests, UploadRequest } from "@/types/hospital.types";
import { saveToLocalStorage } from "@/utilities/localstorage";
import axios, { AxiosResponse } from "axios";

function getUserData(): UserData | null {
  const userDataString = localStorage.getItem("user");
  return userDataString ? JSON.parse(userDataString) : null;
}

export async function getHospitalRequests(): Promise<void> {
  {
    const userData = getUserData();

    if (!userData || !userData.token) {
      console.error("User token is not available.");
      return;
    }

    try {
      const response = await axios.get<Requests>(API.GET_HOSPITAL_REQUESTS, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });

      if (response.data) {
        saveToLocalStorage("hospitalrequests", response.data as Requests);
      } else {
        console.error("No request data received from the server.");
      }
    } catch (error) {
      console.error("Error fetching hospital requests:", error);
    }
  }
}
export async function uploadclinicaldata(
  request: UploadRequest
): Promise<BaseResponse> {
  try {
    const userData = getUserData();
    if (!userData) {
      console.error("User data not found in local storage");
      throw new Error("User data not found in local storage");
    }
    const form = new FormData();
    Object.keys(request).forEach((key) => {
      const value = request[key as keyof UploadRequest];

      if (value && typeof value === "object" && "file" in value && value.file) {
        form.append(key, value.file, value.fileName);
      } else if (value) {
        form.append(key, value.toString());
      }
    });
    const response: AxiosResponse<BaseResponse> = await axios.post(
      API.UPLOAD_CLINICAL_DATA,
      form,
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
          ContentType: "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      return { status: false, message: error.response.data.message };
    } else {
      return { status: false, message: "Failed" };
    }
  }
}
