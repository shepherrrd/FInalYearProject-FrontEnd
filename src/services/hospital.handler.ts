import { API } from "@/constants/api.constants";
import { UserData } from "@/types/auth.types";
import { Requests } from "@/types/hospital.types";
import { saveToLocalStorage } from "@/utilities/localstorage";
import axios, { AxiosResponse } from "axios";

function getUserData(): UserData | null {
    const userDataString = localStorage.getItem('user');
    return userDataString ? JSON.parse(userDataString) : null;
  }

  export async function getHospitalRequests(): Promise<void> { {
    const userData = getUserData();
  
    if (!userData || !userData.token) {
      console.error('User token is not available.');
      return;
    }
  
    try {
      const response = await axios.get<Requests>(API.GET_HOSPITAL_REQUESTS, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });
  
      if (response.data) {
        saveToLocalStorage('hospitalrequests', response.data as Requests);
      } else {
        console.error('No request data received from the server.');
      }
    } catch (error) {
      console.error('Error fetching hospital requests:', error);
    }
  }
}