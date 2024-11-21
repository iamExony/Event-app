import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { SwiperDatas } from "./SwiperDatas";

import {
  Pagination,
  Autoplay,
  Scrollbar,
  EffectCreative,
  EffectCoverflow,
} from "swiper";

const Why = () => {
  return (
    <section>
      <div className="relative md:mt-20 z-25 text-center md:mb-[60px]">
        <h2 className=" font-bold text-navyBlack text-3xl md:text-5xl">
          WHY E-VENT
        </h2>
        <p className="mt-2 text-xl text-bodyText">
          Bringing effortlessly efficient event management
        </p>
      </div>
      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay, Scrollbar, EffectCoverflow]}
          slidesPerView={1}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
            depth: 100,
            stretch: -50,
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          direction={"vertical"}
          speed="2000"
          pagination={{ clickable: true }}
        >
          {SwiperDatas.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="relative  flex flex-col md:flex-row gap-10 w-full px-5 md:px-0">
                  <div className="relative top-16 w-full md:w-[50%] h-fit">
                    <h5 className="text-[#0077C2] text-xl">For event host</h5>
                    <h3 className=" font-semibold text-[2.5rem] leading-[50px] mt-2 mb-10">
                      {data.title}
                    </h3>
                    <p className=" text-bodyText text-xl font-normal ">
                      {data.content}
                    </p>
                  </div>
                  <div className="w-full md:w-[50%] hidden md:block">
                    <img
                      className=" shadowBox  w-full "
                      src={data.image}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="absolute border-2 border-[#DF3602] rounded-lg px-5 py-3 text-[#DF3602] text-base font-medium bottom-4 ml-5 md:ml-0">
          Learn more
        </button>
      </div>
      <div className="relative mt-[30px] md:mt-[80px]">
        <Swiper
          modules={[Pagination, Autoplay, Scrollbar, EffectCoverflow]}
          slidesPerView={1}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
            depth: 100,
            stretch: -50,
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          direction={"vertical"}
          speed="2000"
          pagination={{ clickable: true }}
        >
          {SwiperDatas.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="relative  flex flex-col md:flex-row gap-10 w-full px-5 md:px-0">
                  <div className="relative top-16 w-full md:w-[50%] h-fit">
                    <h5 className="text-[#0077C2] text-xl font-normal">
                      For event personnel
                    </h5>
                    <h3 className="font-semibold text-[2.5rem] leading-[50px] mt-2 mb-10">
                      {data.title}
                    </h3>
                    <p className="text-bodyText text-xl font-normal ">
                      {data.content2}
                    </p>
                  </div>
                  <div className="w-full md:w-[50%] hidden md:block">
                    <img
                      className="shadowBox w-full "
                      src={data.image2}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="absolute border-2 border-[#DF3602] rounded-lg px-5 py-3 text-[#DF3602] text-base font-medium bottom-4 ml-5 md:ml-0">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default Why;
