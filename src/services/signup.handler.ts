import { API } from "@/constants/api.constants";
import {
  HospitalSignupDetailsFormData,
  ResearchCenterSignupDetailsFormData,
  SignupApiResponse,
} from "@/types/Signuptypes";
import axios from "axios";

export async function submitResearchCenterSignupDetails(
  formData: ResearchCenterSignupDetailsFormData
): Promise<SignupApiResponse> {
  const form = new FormData();

  // Append all fields to the form data
  Object.keys(formData).forEach((key) => {
    const value = formData[key as keyof ResearchCenterSignupDetailsFormData];

    if (value && typeof value === "object" && "file" in value && value.file) {
      // Append the file only if it's not null
      form.append(key, value.file, value.fileName);
    } else if (value) {
      // Append other values as strings, ensuring they are not null
      form.append(key, value.toString());
    }
  });

  try {
    const response = await axios.post(API.RESEARCH_CENTER_SIGNUP, form);
    if (response.status === 200) {
      return { status: true, message: response.data.message };
    } else if (response.status === 400) {
      return {
        status: false,
        message:
          response.data.message || "Submission failed due to invalid data.",
      };
    } else {
      return { status: false, message: response.data.message };
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Handle known error status codes here if needed
      if (error.response.status === 400) {
        return {
          status: false,
          message: "Submission failed due to invalid data.",
        };
      }

      return {
        status: false,
        message: error.response.data.message || "Something went wrong.",
      };
    } else {
      // Handle unknown errors
      console.error(error);
      return { status: false, message: "An unexpected error occurred." };
    }
  }
}

export async function submitHospitalSignupDetails(
  formData: HospitalSignupDetailsFormData
): Promise<SignupApiResponse> {
  const form = new FormData();

  Object.keys(formData).forEach((key) => {
    const value = formData[key as keyof HospitalSignupDetailsFormData];

    if (value && typeof value === "object" && "file" in value && value.file) {
      // Append the file only if it's not null
      form.append(key, value.file, value.fileName);
    } else if (value) {
      // Append other values as strings, ensuring they are not null
      form.append(key, value.toString());
    }
  });

  try {
    const response = await axios.post(API.HOSPITAL_SIGNUP, form);
    if (response.status === 200) {
      return { status: true, message: "Successfully submitted!" };
    } else if (response.status === 400) {
      return {
        status: false,
        message: response.data.message,
      };
    } else {
      return { status: false, message: response.data.message };
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Handle known error status codes here if needed
      if (error.response.status === 400) {
        return {
          status: false,
          message: "Submission failed due to invalid data.",
        };
      }

      return {
        status: false,
        message: error.response.data.message || "Something went wrong.",
      };
    } else {
      // Handle unknown errors
      console.error(error);
      return { status: false, message: "An unexpected error occurred." };
    }
  }
}
