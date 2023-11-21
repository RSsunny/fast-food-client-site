import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSceure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSceoure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  axiosSceure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosSceure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const status = err.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/signin");
      }
    }
  );
  return axiosSceure;
};

export default useAxiosSceoure;
