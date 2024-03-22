import axios, { AxiosResponse } from "axios";
import { API } from "@/constants/api.constants";
import { UserData } from "@/types/auth.types";
import { Requests,sendReq } from "@/types/research.types";
import { saveToLocalStorage } from "@/utilities/localstorage";

 function getUserData(): UserData | null {
  const userDataString = localStorage.getItem('user');
  return userDataString ? JSON.parse(userDataString) : null;
}

export async function requestStatus() {
  const userData = getUserData();
  if (!userData) {
    console.error('User data not found in local storage');
    return;
  }

  try {
    const response: AxiosResponse<Requests> = await axios.get(API.GET_REQUEST_STATUS, {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    });

    if (response.data && response.data.status === 'success') {
      saveToLocalStorage('requestStatus', response.data.data);
      console.log('Data saved to local storage');
    } else {
      console.error('Failed to fetch data:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
export async function uploadRequest(data: sendReq) {
  const userData = getUserData();
  if (!userData) {
    console.error('User data not found in local storage');
    return;
  }

  const formData = new FormData();
  formData.append('MedicalRecordID', data.MedicalRecordID.toString());
  formData.append('email', userData.email); // Get email from userData
  if (data.IRBApproval.file) {
    formData.append('IRBApproval', data.IRBApproval.file, data.IRBApproval.fileName);
  }
  if (data.Proposal.file) {
    formData.append('Proposal', data.Proposal.file, data.Proposal.fileName);
  }
  formData.append('Description', data.Description);

  try {
    const response: AxiosResponse<Requests> = await axios.post(API.SEND_DATA_REQUEST, formData, {
      headers: {
        'Authorization': `Bearer ${userData.token}`,
        'Content-Type': 'multipart/form-data', // Important for file uploads
      },
    });

    if (response.data && response.data.status === 'success') {
      console.log('Request uploaded successfully');
    } else {
      console.error('Failed to upload request:', response.data.message);
    }
  } catch (error) {
    console.error('Error uploading request:', error);
  }
}