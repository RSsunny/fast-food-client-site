import { useQuery } from "@tanstack/react-query";
import useAxiosSceoure from "./useAxiosSceoure";
import useAuth from "./useAuth";

const useCart = () => {
  const axios = useAxiosSceoure();
  const { user } = useAuth();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axios(`/api/v1/carts?email=${user.email}`);
      return res.data;
    },
  });
  return { cart, refetch };
};

export default useCart;
