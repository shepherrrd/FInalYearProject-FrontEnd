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

    console.log('Response:', response); 
    if (response.data && response.data.status === true) {
      const processedData = response.data.data.map(item => ({
        ...item,
        timeCreated: item.timeCreated.split('T')[0],
        timeUpdated: item.timeUpdated.split('T')[0],
      }));
      saveToLocalStorage('requestStatus', processedData);
      console.log('Data saved to local storage');
      return processedData;
    }else {
      console.error('Failed to fetch data:', response.data.message);
      return null;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching data:', error.response?.data);
    } else {
      console.error('Error fetching data:', error);
    }}
}
export async function uploadRequest(data: sendReq) {
  const userData = getUserData();
  if (!userData) {
    console.error('User data not found in local storage');
    return;
  }

  const formData = new FormData();
  formData.append('MedicalRecordID', data.MedicalRecordID.toString());
  formData.append('Description', data.Description);
  if (data.IRBApproval.file) {
    formData.append('IRBApproval', data.IRBApproval.file, data.IRBApproval.fileName);
  }
  if (data.Proposal.file) {
    formData.append('Proposal', data.Proposal.file, data.Proposal.fileName);
  }
  if (data.Reason.file) {
    formData.append('Reason', data.Reason.file, data.Reason.fileName);
  }

  try {
    const response: AxiosResponse<Requests> = await axios.post(API.SEND_DATA_REQUEST, formData, { // Update the API endpoint here
      headers: {
        'Authorization': `Bearer ${userData.token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.data && response.data.status === true) {
      console.log('Request uploaded successfully');
    } else {
      console.error('Failed to upload request:', response.data.message);
    }
  } catch (error) {
    console.error('Error uploading request:', error);
  }
}