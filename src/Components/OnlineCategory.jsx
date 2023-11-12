import Container from "./Shared/Container";
import Title from "./Shared/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import image1 from "../assets/home/slide1.jpg";
import image2 from "../assets/home/slide2.jpg";
import image3 from "../assets/home/slide3.jpg";
import image4 from "../assets/home/slide4.jpg";
import image5 from "../assets/home/slide5.jpg";
import image6 from "../assets/home/slide2.jpg";

const OnlineCategory = () => {
  return (
    <>
      <Title
        title={"From 11:00am to 10:00pm"}
        subTitle={"ORDER ONLINE"}
      ></Title>
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper mb-32 "
        >
          <SwiperSlide className="">
            <div className="relative">
              <img src={image1} alt="" className="" />
              <h1 className="absolute bottom-3 text-center w-full text-white text-2xl font-bold font-cinzel  ">
                {" "}
                Salads
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={image2} alt="" />
              <h1 className="absolute bottom-3 text-center w-full text-white text-2xl font-bold font-cinzel">
                {" "}
                pizzas
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={image3} alt="" />
              <h1 className="absolute bottom-3 text-center w-full text-white text-2xl font-bold font-cinzel">
                {" "}
                Soups
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={image4} alt="" />
              <h1 className="absolute bottom-3 text-center w-full text-white text-2xl font-bold font-cinzel">
                {" "}
                desserts
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={image5} alt="" />
              <h1 className="absolute bottom-3 text-center w-full text-white text-2xl font-bold font-cinzel">
                {" "}
                Salads
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={image6} alt="" />
              <h1 className="absolute bottom-3 text-center w-full text-white text-2xl font-bold font-cinzel">
                {" "}
                Salads
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={image1} alt="" />
              <h1 className="absolute bottom-3 text-center w-full text-white text-2xl font-bold font-cinzel">
                {" "}
                Salads
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={image1} alt="" />
              <h1 className="absolute bottom-3 text-center w-full text-white text-2xl font-bold font-cinzel">
                {" "}
                Salads
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={image1} alt="" />
              <h1 className="absolute bottom-3 text-center w-full text-white text-2xl font-bold font-cinzel">
                {" "}
                Salads
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
};

export default OnlineCategory;
