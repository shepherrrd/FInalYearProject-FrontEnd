import axios, { AxiosResponse } from "axios";
import { API } from "@/constants/api.constants";
import { UserData } from "@/types/auth.types";
import { Requests } from "@/types/research.types";
import { saveToLocalStorage } from "@/utilities/localstorage";

function getUserData(): UserData | null {
  const userDataString = localStorage.getItem('user');
  return userDataString ? JSON.parse(userDataString) : null;
}

async function requestStatus() {
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

