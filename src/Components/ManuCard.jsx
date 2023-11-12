import { Link } from "react-router-dom";
import image from "../assets/home/featured.jpg";
import Container from "./Shared/Container";
import Title from "./Shared/Title";
const ManuCard = () => {
  return (
    <Container>
      <div
        className="object-cover bg-center bg-cover px-10 py-2 text-white relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30 "></div>
        <div className="">
          <Title title={"Check it out"} subTitle={"FROM OUR MENU"}></Title>
          <div className="flex gap-5 justify-center mb-10 z-20">
            <img src={image} className="w-[400px]" alt="" />
            <div>
              <p className="mb-5">
                March 20, 2023 <br />
                WHERE CAN I GET SOME? <br />
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Error voluptate facere,
                <br />
                deserunt dolores maiores quod nobis quas quasi. <br />
                Eaque repellat recusandae ad laudantium <br />
                tempore consequatur consequuntur omnis <br />
                ullam maxime tenetur.
              </p>
              <Link className="px-6 py-2  border-b-2 font-cinzel font-medium rounded-lg">
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ManuCard;
