import { Link } from "react-router-dom";
import image20 from "../assets/home/slide1.jpg";
import image21 from "../assets/home/slide2.jpg";
import image22 from "../assets/home/slide3.jpg";
import Container from "./Shared/Container";

const ChefCard = () => {
  return (
    <Container>
      <div className="flex justify-between gap-5 lg:gap-10 font-inter">
        <div className=" text-center bg-gray-200">
          <div className="overflow-hidden w-full h-[300px] mb-5 ">
            <img
              src={image20}
              alt=""
              className="  h-full w-full  hover:scale-125 transition duration-500"
            />
          </div>
          <h1 className="text-2xl mb-2">Caeser Salad</h1>
          <p className="px-5 lg:px-10">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <div className="my-10 uppercase font-bold">
            <Link className="border-b-2 border-yellow-500  bg-gray-300 rounded-lg text-yellow-500 text-xl px-4 py-2">
              add to cart{" "}
            </Link>
          </div>
        </div>
        <div className=" text-center bg-gray-200">
          <div className="overflow-hidden w-full h-[300px] mb-5 ">
            <img
              src={image21}
              alt=""
              className="  h-full w-full  hover:scale-125 transition duration-500"
            />
          </div>
          <h1 className="text-2xl mb-2">Caeser Salad</h1>
          <p className="px-5 lg:px-10 ">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <div className="my-10 uppercase font-bold">
            <Link className="border-b-2 border-yellow-500  bg-gray-300 rounded-lg text-yellow-500 text-xl px-4 py-2">
              add to cart{" "}
            </Link>
          </div>
        </div>
        <div className=" text-center bg-gray-200">
          <div className="overflow-hidden w-full h-[300px] mb-5 ">
            <img
              src={image22}
              alt=""
              className="  h-full w-full  hover:scale-125 transition duration-500"
            />
          </div>
          <h1 className="text-2xl mb-2">Caeser Salad</h1>
          <p className="px-5 lg:px-10 ">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <div className="my-10 uppercase font-bold">
            <Link className="border-b-2 border-yellow-500  bg-gray-300 rounded-lg text-yellow-500 text-xl px-4 py-2">
              add to cart{" "}
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChefCard;
