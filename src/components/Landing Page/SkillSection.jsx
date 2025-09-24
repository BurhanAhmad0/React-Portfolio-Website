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
      className="skillsSection relative px-5 md:px-10 lg:px-20 py-20 bg-primary/99 flex flex-col items-center"
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
      flex items-center justify-start mlg:justify-center gap-8 lg:gap-12"
      >
        <div className="icon1 border-2 border-green-400">
          <RiHtml5Fill size={75} className="text-gray-500/50" />
        </div>
        <div className="icon2">
          <RiCss3Fill size={75} className="text-gray-500/50" />
        </div>
        <div className="icon3">
          <RiJavascriptFill size={75} className="text-gray-500/50" />
        </div>
        <div className="icon4">
          <RiReactjsLine size={75} className="text-gray-500/50" />
        </div>
        <div className="icon5">
          <RiTailwindCssFill size={75} className="text-gray-500/50" />
        </div>
        <div className="icon6">
          <RiNodejsFill size={75} className="text-gray-500/50" />
        </div>
        <div className="icon7">
          <SiExpress size={75} className="text-gray-500/50" />
        </div>
        <div className="icon8">
          <SiSocketdotio size={75} className="text-gray-500/50" />
        </div>
      </div>

      <button className="bg-secondary hover:bg-secondary/75 transition-all duration-300 w-44 py-3 cursor-pointer font-semibold text-black text-lg rounded-lg mt-12 flex items-center justify-center gap-1 mb-10">
        Contact us
      </button>
    </section>
  );
};

export default SkillSection;
