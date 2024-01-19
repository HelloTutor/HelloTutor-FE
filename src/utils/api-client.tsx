import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://tutor-api.devple.net",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json;chartset=utf-8",
  },
});

export default apiClient;
