import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProjectCard from "../ProjectCard.jsx";

const projectList = [
  {
    projectNumber: 1,
    projectThumbnail:
      "https://res.cloudinary.com/dqu9qfaol/image/upload/v1758361788/projectImg1_n6iopp.png",
    projectTitle: "TODOPY | APP TO MANAGE YOUR TASKS",
    projectKeywords: ["React Js", "Node Js", "MongoDB"],
    projectLink: "https://todopyapp.vercel.app/",
  },
  {
    projectNumber: 2,
    projectThumbnail:
      "https://res.cloudinary.com/dqu9qfaol/image/upload/v1758362186/projectImg2_uequxy.png",
    projectTitle: "SOCIALLY | SHORTEN YOUR DISTANCE",
    projectKeywords: ["React Js", "Node Js", "MongoDB"],
    projectLink: "https://sociallyconnectapp.vercel.app/",
  },
  {
    projectNumber: 3,
    projectThumbnail:
      "https://res.cloudinary.com/dqu9qfaol/image/upload/v1758362186/projectImg3_cgpvsf.png",
    projectTitle: "EXCLUSIVE | E-COMMERCE WEBSITE",
    projectKeywords: ["React Js", "Node Js", "MongoDB"],
    projectLink: "https://exclusivebazaar.vercel.app/",
  },
];

const ProjectSection = () => {
  return (
    <section className="projectSection py-20 px-5 md:px-10 lg:px-20 bg-primary/99 flex flex-col items-center">
      <h2 className="font-black text-2xl xms:text-4xl text-white flex items-center gap-3">
        <PiStarFourFill size={40} color="brown" />
        Project Showcase
        <PiStarFourFill size={40} color="brown" />
      </h2>

      <div className="projectCards w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-7">
        {projectList.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>

      <button className="bg-secondary hover:bg-secondary/75 transition-all duration-300 w-52 py-3 cursor-pointer font-semibold text-black text-lg rounded-lg mt-12 flex items-center justify-center gap-1">
        View all projects <IoIosArrowRoundForward size={30} />
      </button>
    </section>
  );
};

export default ProjectSection;
