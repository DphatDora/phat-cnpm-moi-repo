import axios from "./axios.customize";

export const registerApi = (name, email, password) => {
  return axios.post("/api/auth/register", { name, email, password });
};

export const loginApi = (email, password) => {
  return axios.post("/api/auth/login", { email, password });
};

export const getProfileApi = () => {
  return axios.get("/api/users/profile");
};
