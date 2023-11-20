import axios from "axios";

export const axiosSceure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSceoure = () => {
  return axiosSceure;
};

export default useAxiosSceoure;
