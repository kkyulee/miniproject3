import { BannerStyle } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <BannerStyle>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src="./main.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./banner1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="./banner3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </BannerStyle>
  );
};

export default Banner;
