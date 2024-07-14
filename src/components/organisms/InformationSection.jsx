import React from "react";
import GradientBlackWhiteAli from "../../assets/white-black-gradient-ali.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faGolang,
  faHtml5,
  faJava,
  faJs,
  faLaravel,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
  return (
    <>
      <div className="h-fit grid grid-cols-1 items-center">
        <div className="p-5 flex flex-col items-center gap-7 mx-auto">
          <p className="font-raleway font-regular text-lg text-center max-w-lg text-cadetGrey/75">
            Last year Informatics student at Bhayangkara Jakarta Raya
            University. Learn about new things, likes to add skills, and is easy
            to work together. Highly interested in software development
            especially{" "}
            <span className="font-bold bg-msuGreen/50 px-2 py-1 text-nowrap">
              Back-End
            </span>{" "}
            web development.
          </p>
          <address className="font-raleway font-regular text-lg text-center max-w-lg text-cadetGrey/75">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            Bekasi, Jawa Barat.
          </address>
          <h4 className="font-bold font-lato text-4xl text-cadetGrey text-center">
            <FontAwesomeIcon icon={faCode} className="w-5" /> <br />
            Skillset
          </h4>
          <ul className="flex flex-wrap justify-center gap-7 text-cadetGrey max-w-sm">
            <li>
              <FontAwesomeIcon
                icon={faHtml5}
                className="text-5xl text-[#E44D26]"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="text-5xl text-[#198ed1]"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faJs}
                className="text-5xl text-[#fffc36]"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPhp}
                className="text-5xl text-[#0e5bc0]"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLaravel}
                className="text-5xl text-[#ec5d1a]"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGolang}
                className="text-5xl text-[#27b0ff]"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faJava}
                className="text-5xl text-[#5382a1]"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
