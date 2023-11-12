import { useEffect, useState } from "react";
import Container from "./Shared/Container";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image20 from "../assets/home/quote-left 1.png";
const UserComment = () => {
  const [comment, setcomment] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setcomment(data));
  }, []);
  console.log(comment);
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10200,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {comment?.map((data) => (
          <SwiperSlide key={data._id}>
            <div className="text-center flex flex-col space-y-8 px-20 justify-center">
              <Rating
                className="text-red-500 w-[400px] mx-auto  "
                style={{ maxWidth: 250 }}
                value={data?.rating}
                readOnly
              />
              <img className="w-20  mx-auto " src={image20} alt="" />
              <p className="w-[800px] mx-auto">{data.details}</p>
              <h1 className="text-2xl font-cinzel font-bold text-yellow-500">
                {data?.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default UserComment;
