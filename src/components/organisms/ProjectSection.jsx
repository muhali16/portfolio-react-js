import React from "react";
import ProjectCards from "../molecules/ProjectCards";

export default function ProjectSection() {
  return (
    <div className="grid grid-cols-1 items-center px-5 lg:px-16">
      <h1 className="font-extrabold font-lato text-4xl text-cadetGrey text-center mt-7">
        P R O J E C T S
      </h1>
      <p className="text-winterGreenDream text-lg font-raleway font-medium leading-8 text-center mt-3 mb-7">
        See my{" "}
        <a
          href="https://linkedin.com/in/muhali16"
          target="_blank"
          className="font-semibold bg-russianViolet text-cadetGrey px-2 py-1 mx-1 rounded-md transition-all duration-300 hover:bg-richBlack hover:text-cadetGrey"
        >
          GitHub
        </a>{" "}
        page for more projects.
      </p>
      <ProjectCards />
    </div>
  );
}
