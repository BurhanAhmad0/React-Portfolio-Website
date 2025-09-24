import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const AboutSection = () => {
  return (
    <section className="aboutSection bg-primary py-30 flex flex-col items-center">
      <h2 className="font-bold text-white px-5 md:px-10 mlg:px-20 lg:px-40 text-5xl mlg:text-6xl text-center leading-17">
        "Building Brands, Products &<br /> Experiences that{" "}
        <div className="bg-secondary -skew-x-20 inline-block px-3">
          <p className="skew-x-20">Stick."</p>
        </div>
      </h2>

      <p className="text-center text-gray-500 px-10 mlg:px-20 lg:px-40 mt-5 text-sm mlg:text-lg">
        Hello, I’m Burhan. With over a year of experience in design and
        development, I specialize in crafting intuitive interfaces for apps and
        websites, building strong brand identities, and developing websites and
        social media applications. My focus is on combining function with form
        to deliver ideas that enhance and elevate the user experience.
      </p>

      <button className="bg-secondary hover:bg-secondary/75 transition-all duration-300 w-44 py-3 cursor-pointer font-semibold text-amber-800 text-lg rounded-lg mt-12 flex items-center justify-center gap-1">
        View Projects <IoIosArrowRoundForward size={30} />
      </button>
    </section>
  );
};

export default AboutSection;
