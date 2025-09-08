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

export const getCategoriesApi = () => {
  return axios.get("/api/category");
};

export const getProductsByCategoryApi = (categoryId, page = 1) => {
  return axios.get(`/api/product/${categoryId}?page=${page}`);
};

export const searchProductsApi = (name) => {
  return axios.get(`/api/product/search?name=${encodeURIComponent(name)}`);
};

export const filterProductsApi = (filters = {}) => {
  const params = new URLSearchParams();

  if (filters.minPrice) params.append("minPrice", filters.minPrice);
  if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);
  if (filters.sort) params.append("sort", filters.sort);
  if (filters.category) params.append("category", filters.category);

  return axios.get(`/api/product/filter?${params.toString()}`);
};
