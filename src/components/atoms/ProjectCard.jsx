import React from "react";
import Project1 from "../../assets/web_sks.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({
  projectName,
  desc,
  tech,
  isLive,
  projectLink,
  repository,
  thumbnail,
}) {
  return (
    <div className="bg-msuGreen/50 rounded-md max-w-sm overflow-hidden">
      <div className="bg-white p-7 flex flex-row justify-center items-center">
        {thumbnail.map((element, index) => {
          return (
            <img
              key={index}
              src={element}
              alt="Project Image"
              className="h-[10rem]"
            />
          );
        })}
      </div>
      <div className="p-7 flex flex-col gap-5">
        <h2 className="text-xl text-cadetGrey font-lato font-bold">
          {projectName}
        </h2>
        <p className="text-winterGreenDream text-sm font-raleway font-medium">
          {desc}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={repository}
            title="Open to Github Repository"
            target="_blank"
            className="text-cadetGrey font-semibold text-xl border border-cadetGrey bg-russianViolet rounded-lg px-2 py-1 w-fit transition-all duration-300 hover:bg-msuGreen"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={projectLink}
            title="Open Live Preview"
            target="_blank"
            className={
              "text-cadetGrey font-semibold text-xl border border-cadetGrey bg-russianViolet rounded-lg px-2 py-1 w-fit transition-all duration-300 hover:bg-msuGreen " +
              (isLive == true ? "" : "hidden")
            }
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className={isLive === true ? "" : "hidden"}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
