import React, { useEffect } from "react";
import GradientBlackWhiteAli from "../../assets/white-black-gradient-ali.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <>
      <div className="pt-[5rem] grid grid-cols-1 items-center">
        <div className="p-5 flex flex-wrap items-center gap-7 mx-auto">
          <div className="overflow-hidden border-b-2 border-cadetGrey">
            {/* <div className="absolute bg-cadetGrey h-screen w-full z-30 -top-10">
              <h1 className="text-2xl text-msuGreen">Hallo</h1>
            </div> */}
            <img
              src={GradientBlackWhiteAli}
              alt="Ali Main Photo"
              data-aos="fade-up"
              data-aos-duration="3000"
              className="w-[21rem] z-10"
            />
          </div>
          <div>
            <h2 className="text-winterGreenDream text-[3rem] font-lato font-extrabold leading-[4rem]">
              Hello <span className="animate animate-shake">🖐️</span>,
              <span className="block text-[5rem] text-cadetGrey animate-shake">
                I'm Ali.
              </span>
            </h2>
            <p className="text-cadetGrey/50 md:hidden">
              Swap next page <FontAwesomeIcon icon={faArrowRight} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
