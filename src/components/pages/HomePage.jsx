import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GradientBlackWhiteAli from "../../assets/white-black-gradient-ali.png";
import MainSwiper from "../organisms/MainSwiper";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className="bg-richBlack lato-regular">
        <section className="p-5 md:p-7 lg:p-10">
          <MainSwiper />
        </section>
      </main>
    </>
  );
}
