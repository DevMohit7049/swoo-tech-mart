import { Axios } from "@/constants/contents/MainContent";

const authBase = "/auth";

export async function registerUserApi(payload) {
  const response = await Axios.post(`${authBase}/register`, payload);
  return response?.data;
}

export async function loginUserApi(payload) {
  const response = await Axios.post(`${authBase}/login`, payload);
  return response?.data;
}

export async function getProfileApi() {
  const response = await Axios.get(`${authBase}/profile`);
  return response?.data;
}

export async function logoutUserApi() {
  const response = await Axios.post(`${authBase}/logout`);
  return response?.data ?? true;
}
