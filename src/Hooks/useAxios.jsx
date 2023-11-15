import axios from "axios";

export const axiosSceure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxios = () => {
  return axiosSceure;
};

export default useAxios;
