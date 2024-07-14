import React from "react";
import ProjectCard from "../atoms/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faLaravel } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCards() {
  const projects = [
    {
      projectName:
        "Company Profile Website With CMS For PT Ambulance Pintar Indonesia",
      desc: "A dynamic website features a content management system (CMS) designed to manage the landing page, articles, and product content seamlessly. The website is developed using Laravel and utilizes a MySQL database for data management. The CMS, which allows easy creation and management of the dashboard, is built using Laravel Filament. This setup ensures efficient content updates and an organized structure for handling various types of content on the website.",
      tech: [
        <FontAwesomeIcon icon={faLaravel} />,
        <FontAwesomeIcon icon={faDatabase} />,
        <FontAwesomeIcon icon={faBootstrap} />,
      ],
      isLive: true,
      projectLink: "https://ambulance-terbaru.com/",
      repository:
        "https://github.com/muhali16/ambulance-pintar-indonesia-laravel",
      thumbnail: [
        "/images/projects/ambulance-terbaru.png",
        "/images/projects/ambulance-terbaru-mobile.png",
      ],
    },
    {
      projectName:
        "Graduation Student Present Web Application For Lepas Kenang Sekolah Kak Seto 2024 Event",
      desc: "A dynamic web application for the Lepas Kenang Sekolah Kak Seto 2024 event allows students to check attendance by scanning a QR code. After verifying attendance, their name appears in a welcoming text. The application is built with Express JS, uses a MySQL database, and employs Socket IO to update the welcoming text in real-time with the student's name.",
      tech: [
        <FontAwesomeIcon icon={faLaravel} />,
        <FontAwesomeIcon icon={faDatabase} />,
        <FontAwesomeIcon icon={faBootstrap} />,
      ],
      isLive: false,
      projectLink: "#",
      repository: "https://github.com/muhali16/present-graduation-2024",
      thumbnail: [
        "/images/projects/absensi.png",
        "/images/projects/absensi-mobile.png",
      ],
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-7 mx-auto pb-[10rem] lg:grid-cols-2">
      {projects.map((data, index) => {
        return (
          <ProjectCard
            key={index}
            projectName={data.projectName}
            desc={data.desc}
            tech={data.tech}
            isLive={data.isLive}
            projectLink={data.projectLink}
            repository={data.repository}
            thumbnail={data.thumbnail}
          />
        );
      })}
    </div>
  );
}
