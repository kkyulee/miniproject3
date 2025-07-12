import React, { useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "../../assets/data";
import { ListItemstyle } from "./style";
const { day15 } = data;
const ListItem3 = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(day15.length);
  const prependNumber = useRef(1);
  const [slides, setSlides] = useState(
    Array.from({ length: day15.length }).map((_, index) => `Slide ${index + 1}`)
  );
  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };
  return (
    <ListItemstyle>
      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={50}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        loop={true}
      >
        {day15.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              src={img.imgurl} // ./images/... → /images/...
              alt={img.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ListItemstyle>
  );
};

export default ListItem3;
