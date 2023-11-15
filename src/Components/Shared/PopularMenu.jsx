import { useEffect, useState } from "react";
import Container from "./Container";
import CardList from "../cardList";
import { Link } from "react-router-dom";

const PopolarManu = ({ _id, category, button, img, title, details }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/menu")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const popularProduct = product?.filter((data) => data.category === category);

  return (
    <Container>
      {title && (
        <div
          className="object-cover bg-center flex justify-center items-center h-[500px] text-white mb-20"
          style={{ backgroundImage: `url("${img}")` }}
        >
          <div className="w-3/4 mx-auto p-20 bg-black bg-opacity-50 text-center">
            <h1 className="text-3xl font-cinzel font-bold ">{title}</h1>
            <p className="font-inter mt-3">{details}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 justify-between md:gap-x-10 lg:gap-x-20 gap-y-5 lg:gap-y-10 px-5 lg:px-0">
        {popularProduct?.map((data) => (
          <CardList key={data._id} data={data}></CardList>
        ))}
      </div>
      <div className="text-center my-20">
        <Link
          to={"/ourshop"}
          state={category}
          className="px-6 py-2 border-b-2 font-cinzel font-medium rounded-lg hover:bg-black hover:text-yellow-500 hover:border-none"
        >
          {button}
        </Link>
      </div>
    </Container>
  );
};

export default PopolarManu;
