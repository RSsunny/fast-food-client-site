import Container from "../../Components/Shared/Container";
import CoverTitle from "../../Components/Shared/CoverTitle";
import PopolarManu from "../../Components/Shared/PopularMenu";
import Title from "../../Components/Shared/Title";
import image1 from "../../assets/menu/banner3.jpg";
import image31 from "../../assets/menu/dessert-bg.jpeg";
import image32 from "../../assets/menu/pizza-bg.jpg";
import image33 from "../../assets/menu/salad-bg.jpg";
import image34 from "../../assets/menu/soup-bg.jpg";
const OurManue = () => {
  return (
    <>
      {/* banner */}
      <CoverTitle
        img={image1}
        title={"OUR MENU"}
        details={"Would you like to try a dish?"}
      ></CoverTitle>

      {/* Today offer */}
      <Title title={"Don't miss"} subTitle={"TODAY'S OFFER"}></Title>
      <PopolarManu
        category={"popular"}
        button={"ORDER YOUR FAVOURITE FOOD"}
      ></PopolarManu>

      {/* Disserts */}
      <PopolarManu
        category={"dessert"}
        button={"ORDER YOUR FAVOURITE DESSERTS"}
        img={image31}
        title={"DESSERTS"}
        details={
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></PopolarManu>

      {/* pizza */}
      <PopolarManu
        category={"pizza"}
        button={"ORDER YOUR FAVOURITE PIZZA"}
        img={image32}
        title={"PIZZA"}
        details={
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></PopolarManu>

      {/* SALADS */}
      <PopolarManu
        category={"salad"}
        button={"ORDER YOUR FAVOURITE SALADS"}
        img={image33}
        title={"SALADS"}
        details={
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></PopolarManu>
      {/* soup */}
      <PopolarManu
        category={"soup"}
        button={"ORDER YOUR FAVOURITE SOUPS"}
        img={image34}
        title={"SOUPS"}
        details={
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></PopolarManu>
    </>
  );
};

export default OurManue;
