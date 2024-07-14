import React from "react";

export default function ContactSection() {
  return (
    <div className="pt-[5rem] grid grid-cols-1 items-center">
      <div className="p-5 mx-auto">
        <h1
          className="text-winterGreenDream text-[3rem] font-lato font-extrabold"
          data-aos="flip-up"
          data-aos-duration="500"
        >
          Keep in touch,
        </h1>
        <p className="text-winterGreenDream text-lg font-raleway font-medium leading-8">
          email at{" "}
          <a
            href="mailto:muhammadali55214@gmail.com"
            className="font-semibold bg-russianViolet text-cadetGrey px-2 py-1 mx-1 rounded-md transition-all duration-300 hover:bg-richBlack hover:text-cadetGrey"
          >
            muhammadali55214@gmail.com
          </a>
          <br />
          or go to my{" "}
          <a
            href="https://linkedin.com/in/muhali16"
            target="_blank"
            className="font-semibold bg-russianViolet text-cadetGrey px-2 py-1 mx-1 rounded-md transition-all duration-300 hover:bg-richBlack hover:text-cadetGrey"
          >
            LinkedIn
          </a>{" "}
          account.
        </p>
        <p className="text-winterGreenDream text-lg font-raleway font-medium leading-8 mt-5">
          See my{" "}
          <a
            href="https://github.com/muhali16"
            target="_blank"
            className="font-semibold bg-russianViolet text-cadetGrey px-2 py-1 mx-1 rounded-md transition-all duration-300 hover:bg-richBlack hover:text-cadetGrey"
          >
            GitHub
          </a>{" "}
          page for more projects. <br />
          Open collaboration for all project with{" "}
          <span className="font-bold bg-msuGreen/50 px-2 py-1 text-nowrap">
            Back-End
          </span>{" "}
          position.
        </p>
        <p className="text-winterGreenDream text-lg font-raleway font-medium leading-8 mt-5">
          Visit here for my{" "}
          <a
            href="https://drive.google.com/drive/folders/1cChS-rJ0LgqxqKvdkY9leH98n7Cpkm4u?usp=sharing"
            target="_blank"
            className="font-semibold bg-russianViolet text-cadetGrey px-2 py-1 mx-1 rounded-md transition-all duration-300 hover:bg-richBlack hover:text-cadetGrey"
          >
            Resume
          </a>
        </p>
      </div>
    </div>
  );
}
