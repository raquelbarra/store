import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export const getProducts = async () => {
  const response = await instance.get("/products");
  return response.data;
}

export const getProduct = async (id) => {
    const response = await instance.get(`/products/${id}`);
    return response.data;
}