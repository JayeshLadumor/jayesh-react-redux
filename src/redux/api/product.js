import axios from "axios";
const ENDPOINT = "https://aveosoft-react-assignment.herokuapp.com/";

export const getProductListAPI = () => {
  return axios.get(`${ENDPOINT}products`);
};

export const getProductDetailAPI = (id) => {
  return axios.get(`${ENDPOINT}products/${id}`);
};

export const getCategoryAPI = () => {
  return axios.get(`${ENDPOINT}categories}`);
};
