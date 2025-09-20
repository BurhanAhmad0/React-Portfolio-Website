import React, { useEffect } from "react";
import {
  RiTailwindCssFill,
  RiNodejsFill,
  RiReactjsLine,
  RiJavascriptFill,
  RiHtml5Fill,
  RiCss3Fill,
} from "react-icons/ri";
import { SiExpress, SiSocketdotio } from "react-icons/si";

const SkillSection = () => {
  return (
    <section
      id="skills"
      className="skillsSection relative px-20 py-20 bg-primary/99 flex flex-col items-center"
    >
      <p className="border border-white inline px-4 py-1 rounded-full font-medium text-xs text-white mb-3">
        My Specialities
      </p>
      <h2 className="text-white text-5xl font-semibold text-center leading-14">
        Let's Create an{" "}
        <span className="text-yellow-400">
          Amazing <br /> Project Together
        </span>
      </h2>

      <div
        className="logosInfiniteTrail py-10 w-full mt-8 overflow-x-hidden 
      flex items-center justify-center gap-12 text-7xl"
      >
        <RiHtml5Fill className="text-gray-500/50" />
        <RiCss3Fill className="text-gray-500/50" />
        <RiJavascriptFill className="text-gray-500/50" />
        <RiReactjsLine className="text-gray-500/50" />
        <RiTailwindCssFill className="text-gray-500/50" />
        <RiNodejsFill className="text-gray-500/50" />
        <SiExpress className="text-gray-500/50" />
        <SiSocketdotio className="text-gray-500/50" />
      </div>

      <button className="bg-secondary hover:bg-secondary/75 transition-all duration-300 w-44 py-3 cursor-pointer font-semibold text-amber-800 text-lg rounded-lg mt-12 flex items-center justify-center gap-1 mb-10">
        Contact us
      </button>
    </section>
  );
};

export default SkillSection;
