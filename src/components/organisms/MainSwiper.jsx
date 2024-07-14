import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import {
  faCircleInfo,
  faClipboardList,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import HeroSection from "./HeroSection";
import InformationSection from "./InformationSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import Aos from "aos";

SwiperCore.use([Navigation, Pagination, Controller]);

export default function MainSwiper() {
  const swiperRef = useRef(null);
  const slides = [
    {
      name: "Home",
      icon: <FontAwesomeIcon icon={faHome} />,
      content: <HeroSection />,
    },
    {
      name: "About",
      icon: <FontAwesomeIcon icon={faCircleInfo} />,
      content: <InformationSection />,
    },
    {
      name: "Projects",
      icon: <FontAwesomeIcon icon={faClipboardList} />,
      content: <ProjectSection />,
    },
    {
      name: "Contact",
      icon: <FontAwesomeIcon icon={faUser} />,
      content: <ContactSection />,
    },
  ];

  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      <Swiper
        className="h-fit"
        cssMode={false}
        watchOverflow={"clip"}
        autoHeight={true}
        direction="horizontal"
        ref={swiperRef}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        // onSliderMove={console.log(swiperRef.current.height)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide.content}</SwiperSlide>
        ))}
      </Swiper>

      <div className="p-0 fixed bottom-3 flex justify-center w-full z-20 -translate-x-5 md:-translate-x-7 lg:-translate-x-10">
        <div className="bg-cadetGrey/75 backdrop-blur-md px-10 py-5 rounded-xl flex flex-row gap-10 justify-center w-fit">
          {slides.map((slide, index) => (
            <button
              className="text-msuGreen text-2xl transition-all duration-500 hover:scale-[1.75]"
              key={index}
              onClick={() => handlePaginationClick(index)}
              title={slide.name}
            >
              {slide.icon}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
