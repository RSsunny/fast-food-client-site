import { useQuery } from "@tanstack/react-query";
import useAxiosSceoure from "./useAxiosSceoure";

const useAllmanu = () => {
  const axios = useAxiosSceoure();
  const { isLoading, isError, data, error, refetch, isFetching } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await axios(`/api/v1/menu`);
      const data = await res.data;
      return data;
    },
  });
  return { isLoading, isError, data, error, refetch, isFetching };
};

export default useAllmanu;
