import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSceoure from "../../Hooks/useAxiosSceoure";
import useCart from "../../Hooks/useCart";

const Card = ({ data }) => {
  const { _id, name, recipe, image, category, price } = data || {};
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axios = useAxiosSceoure();
  const { refetch } = useCart();
  const handleAdd = () => {
    console.log(data, user?.email);
    if (!user) {
      Swal.fire({
        title: "Plese Login",
        text: "at frist  Login then add items ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, go to Login page",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin", { state: { from: location } });
        }
      });
    } else {
      const manuList = {
        email: user?.email,
        manu_Id: _id,
        price: price,
        category: category,
      };
      console.log(manuList);
      axios.post("/api/v1/users", manuList).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your items has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    }
  };
  return (
    <div className=" text-center bg-gray-200">
      <div className="overflow-hidden w-full h-[300px] mb-5 ">
        <img
          src={image}
          alt=""
          className="  h-full w-full  hover:scale-125 transition duration-500"
        />
      </div>
      <h1 className="text-2xl mb-2">{name}</h1>
      <p className="px-5 lg:px-10">{recipe}</p>
      <p className="px-5 lg:px-10">{category}</p>
      <div className="my-10 uppercase font-bold">
        <button
          onClick={handleAdd}
          className="border-b-2 border-yellow-500  bg-gray-300 rounded-lg text-yellow-500 text-xl px-4 py-2 hover:bg-black"
        >
          add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default Card;
