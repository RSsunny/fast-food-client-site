import { useQuery } from "@tanstack/react-query";
import useAxiosSceoure from "../Hooks/useAxiosSceoure";

const Menu = (items) => {
  const axios = useAxiosSceoure();
  const { isLoading, isError, data, error, refetch, isFetching } = useQuery({
    queryKey: ["menus", items],
    queryFn: async () => {
      const res = await axios(`/api/v1/menu?category=${items}`);
      const data = await res.data;
      return data;
    },
  });
  return { isLoading, isError, data, error, refetch, isFetching };
};

export default Menu;
