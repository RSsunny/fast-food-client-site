import Banner from "../../Components/Banner/Banner";
import OnlineCategory from "../../Components/OnlineCategory";
import CoverTitle from "../../Components/Shared/CoverTitle";
import Title from "../../Components/Shared/Title";
import image10 from "../../assets/home/banner.jpg";
import PopolarManu from "../../Components/Shared/PopularMenu";
import ContactNumber from "./ContactNumber";
import ChefCard from "../../Components/ChefCard";
import ManuCard from "../../Components/ManuCard";
import UserComment from "../../Components/UserComment";
const Home = () => {
  return (
    <>
      <Banner></Banner>
      <OnlineCategory></OnlineCategory>
      <CoverTitle
        img={image10}
        title={"Bistro Boss"}
        details={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        }
      ></CoverTitle>
      <Title title={"Check it out"} subTitle={"FROM OUR MENU"}></Title>
      <PopolarManu
        category={"popular"}
        button={"View Full  Menu"}
      ></PopolarManu>
      <ContactNumber></ContactNumber>
      <Title title={"Should Try"} subTitle={"CHEF RECOMMENDS"}></Title>
      <ChefCard></ChefCard>
      <ManuCard></ManuCard>
      <Title title={"What Our Clients Say"} subTitle={"TESTIMONIALS"}></Title>
      <UserComment></UserComment>
    </>
  );
};

export default Home;
