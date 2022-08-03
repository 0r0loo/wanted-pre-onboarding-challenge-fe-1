import axios from "axios";

export const baseURL = process.env.REACT_APP_SERVER_URL;

const httpClient = axios.create({
  baseURL,
});

httpClient.defaults.headers.common["Authorization"] =
  localStorage.getItem("token") || undefined;

export default httpClient;
