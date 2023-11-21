import axios from "axios";

export const axiosSceure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false,
});
const useAxiosPublic = () => {
  return axiosSceure;
};

export default useAxiosPublic;
