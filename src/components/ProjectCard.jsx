import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative">
      <div className="projectThumbnail h-68 rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover object-top"
          src={project.projectThumbnail}
          loading="lazy"
          alt="Project Image"
        />
      </div>

      <h3 className="text-xl font-bold text-white mt-3">
        0{`${project.projectNumber}`}. {project.projectTitle}
      </h3>

      <div className="skillTags mt-2 flex gap-2 flex-wrap">
        {project.projectKeywords.map((skill, index) => {
          return (
            <div
              key={index}
              className="tag text-sm border border-white rounded-lg py-1 px-2 text-white"
            >
              {skill}
            </div>
          );
        })}
      </div>

      <Link
        to={project.projectLink}
        target="_blank"
        className="moreIcon cursor-pointer absolute bottom-25 -left-1 z-10 bg-white w-12 h-12 rounded-full flex items-center justify-center"
      >
        <MdOutlineArrowOutward size={30} />
      </Link>
    </div>
  );
};

export default ProjectCard;
