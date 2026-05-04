import { Axios } from "@/constants/contents/MainContent";

const adminBase = "/admin";

export async function fetchAdminUsersApi() {
  const response = await Axios.get(`${adminBase}/users`);
  return response?.data?.users;
}

export async function toggleUserRoleApi(id) {
  const response = await Axios.put(`${adminBase}/user-role/${id}`);
  return response?.data?.user;
}

export async function toggleBlockUserApi(id) {
  const response = await Axios.put(`${adminBase}/block-user/${id}`);
  return response?.data?.user;
}

export async function deleteAdminUserApi(id) {
  await Axios.delete(`${adminBase}/user/${id}`);
  return id;
}
