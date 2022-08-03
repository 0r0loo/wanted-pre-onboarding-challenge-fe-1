import httpClient from "./apiConfig";

const DEFAULT_URL = "/users";

/**
 * POST /users/create
 * Parameter
 * email: string
 * password: string
 */
export const signUpApi = async (data) =>
  httpClient.post(`${DEFAULT_URL}/create`, data);

/**
 * POST /users/login
 * Parameter
 * email: string
 * password: string
 */
export const loginApi = async (data) => {
  const result = await httpClient.post(`${DEFAULT_URL}/login`, data);
  if (result?.data?.token) {
    localStorage.setItem("token", result.data.token);
    httpClient.defaults.headers.common["Authorization"] = result.data.token;
  }
  return result;
};
