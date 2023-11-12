import { useEffect, useState } from "react";
import Container from "./Container";
import CardList from "../cardList";
import { Link } from "react-router-dom";

const PopolarManu = ({ category }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const popularProduct = product?.filter((data) => data.category === category);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between md:gap-x-10 lg:gap-x-20 gap-y-5 lg:gap-y-10">
        {popularProduct?.map((data) => (
          <CardList key={data._id} data={data}></CardList>
        ))}
      </div>
      <div className="text-center my-20">
        <Link className="px-6 py-2 border-b-2 font-cinzel font-medium rounded-lg">
          View Full Menu
        </Link>
      </div>
    </Container>
  );
};

export default PopolarManu;
