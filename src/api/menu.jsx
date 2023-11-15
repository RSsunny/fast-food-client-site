import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";

const Menu = (items) => {
  const axios = useAxios();
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
