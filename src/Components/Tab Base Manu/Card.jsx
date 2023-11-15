import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { _id, name, recipe, image, category, price } = data || {};
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
        <Link className="border-b-2 border-yellow-500  bg-gray-300 rounded-lg text-yellow-500 text-xl px-4 py-2 hover:bg-black">
          add to cart{" "}
        </Link>
      </div>
    </div>
  );
};

export default Card;
