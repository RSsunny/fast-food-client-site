import { useQuery } from "@tanstack/react-query";
import useAxiosSceoure from "../Hooks/useAxiosSceoure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axios = useAxiosSceoure();
  const { user } = useAuth();
  const {
    isLoading,
    isError,
    data: isAdmin,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const res = await axios(`/api/v1/users/${user.email}`);
      const data = await res.data.admin;
      return data;
    },
  });
  return { isLoading, isError, isAdmin, error, refetch, isFetching };
};

export default useAdmin;
