const IsLive = true;
const API_URL = IsLive
  ? "https://finalyearproject-api.onrender.com"
  : "https://localhost:7028";

export const API = {
  HOSPITAL_SIGNUP: `${API_URL}/api/Registration/RegisterHospital`,
  LOGIN: `${API_URL}/api/Auth/SignIn`,
  RESEARCH_CENTER_SIGNUP: `${API_URL}/api/Registration/RegisterResearchCenter`,
  GET_REGISTRAION_REQUESTS: `${API_URL}/api/Admin/GetAllRegistrationRequests`,
  UPDATE_REGISTRAION_REQUESTS: `${API_URL}/api/Admin/ChangeRequestStatus`,
  GET_HOSPITAL_REQUESTS:`${API_URL}/api/HospitalDashBoard/GetRequests`,
  GET_RESOURCES: `${API_URL}/api/resources`,
  GET_RESOURCES_BY_HOSPITAL: `${API_URL}/api/resources-by-hospital`,
  GET_RESOURCES_BY_RESEARCH_CENTER: `${API_URL}/api/resources-by-research-center`,
  GET_RESOURCE_BY_ID: `${API_URL}/api/resource-by-id`,
  GET_RESOURCE_BY_HOSPITAL_AND_ID: `${API_URL}/api/resource-by-hospital-and-id`,
  GET_RESOURCE_BY_RESEARCH_CENTER_AND_ID: `${API_URL}/api/resource-by-research-center-and-id`,
  GET_RESOURCE_BY_HOSPITAL_AND_TYPE: `${API_URL}/api/resource-by-hospital-and-type`,
  GET_RESOURCE_BY_RESEARCH_CENTER_AND_TYPE: `${API_URL}/api/resource-by-research-center-and-type`,
  GET_RESOURCE_BY_HOSPITAL_AND_TYPE_AND_ID: `${API_URL}/api/resource-by-hospital-and-type-and-id`,
  GET_RESOURCE_BY_RESEARCH_CENTER_AND_TYPE_AND_ID: `${API_URL}/api/resource-by-research-center-and-type-and-id`,
  GET_RESOURCE_BY_HOSPITAL_AND_TYPE_AND_STATUS: `${API_URL}/api/resource-by-hospital-and-type-and-status`,
  GET_RESOURCE_BY_RESEARCH_CENTER_AND_TYPE_AND_STATUS: `${API_URL}/api/resource-by-research-center-and-type-and-status`,
  GET_RESOURCE_BY_HOSPITAL_AND_TYPE_AND_ID_AND_STATUS: `${API_URL}/api/resource-by-hospital-and-type-and-id-and-status`,
  GET_RESOURCE_BY_RESEARCH_CENTER_AND_TYPE_AND_ID_AND_STATUS: `${API_URL}/api/resource-by-research-center-and-type-and-id-and-status`,
  GET_RESOURCE_BY_HOSPITAL_AND_TYPE_AND_STATUS_AND_CITY: `${API_URL}/api/resource-by-hospital-and-type-and-status-and-city`,
  GET_RESOURCE_BY_RESEARCH_CENTER_AND_TYPE_AND_STATUS_AND_CITY: `${API_URL}/api/resource-by-research-center-and-type-and-status-and-city`,
  GET_RESOURCE_BY_HOSPITAL_AND_TYPE_AND_ID_AND_STATUS_AND_CITY: `${API_URL}/api/resource-by-hospital-and-type-and-id-and-status-and-city`,
  GET_RESOURCE_BY_RESEARCH_CENTER_AND_TYPE_AND_ID_AND_STATUS_AND_CITY: `${API_URL}/api/resource-by-research-center-and-type-and-id-and-status-and-city`,
};
