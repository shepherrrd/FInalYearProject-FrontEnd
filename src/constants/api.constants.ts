const IsLive = false;
const API_URL = IsLive
  ? "https://api.covidresources.in"
  : "http://localhost:5000";

export const API = {
  HOSPITAL_SIGNUP: `${API_URL}/api/hospital-signup`,
  LOGIN: `${API_URL}/api/login`,
  RESEARCH_CENTER_SIGNUP: `${API_URL}/api/research-center-signup`,
  GET_HOSPITALS: `${API_URL}/api/hospitals`,
  GET_RESEARCH_CENTERS: `${API_URL}/api/research-centers`,
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
