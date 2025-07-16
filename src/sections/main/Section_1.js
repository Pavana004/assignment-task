import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import carousel_1 from "../../assets/images/c-1.png";
import carousel_2 from "../../assets/images/c-2.png";
import carousel_3 from "../../assets/images/c-3.png";

const Section_1 = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      slidesPerView={1}
      effect={"fade"}
      pagination={{ clickable: true }}
      autoplay={{ delay: 1000 }}
    >
      <SwiperSlide className=" relative">
        <img src={carousel_1} alt="c-1" />
        <div
          className=" absolute w-[700px] left-[50%] top-[40%] text-[48px] font-bold transition-all duration-300 transform origin-top
               animate-carousel_ani  "
        >
          <h1 className="text-left">
            A Fresh Approach to Market Research
            <span className="text-[#E8505E]">.</span>
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={carousel_2} alt="c-2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carousel_3} alt="c-3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Section_1;
