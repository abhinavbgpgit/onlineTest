import React, { useRef, useState } from "react";
import Slid1 from "./slids/Slid1";
import Slid2 from "./slids/Slid2";
import Slid3 from "./slids/Slid3"
import Slid4 from "./slids/Slid4";
import Slid5 from "./slids/Slid5";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css";
const Carousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 116500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect="flip"
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slid1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slid2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slid3 />``
        </SwiperSlide>
        <SwiperSlide>
          <Slid4 />
        </SwiperSlide>
        <SwiperSlide>
          <Slid5 />
        </SwiperSlide>
        {/* <SwiperSlide style={{backgroundImage:`url(${image3})` ,backgroundSize:"cover"}}></SwiperSlide>
        <SwiperSlide style={{backgroundImage:`url(${image4})` ,backgroundSize:"cover"}}></SwiperSlide> */}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
