import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoAmplify } from "react-icons/io5";

import DevImg from "../../assets/devImg.webp";

import Sidebar from "./Sidebar";

const Header = () => {
  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Scroll smoothly to the target element
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="potfolioHeader relative bg-primary flex flex-col items-center justify-center gap-2 pt-10 px-5 md:px-10">
      <div className="devIntro relative flex flex-col items-center justify-center gap-6">
        {/* Foreground content */}
        <h1 className="text-white text-center leading-10 relative z-10">
          Hii Folks!! I'm Burhan, <br />
          <span className="text-5xl font-bold text-white">React & Node Js</span>
        </h1>

        <div className="profession relative z-10 w-72 h-20 bg-gray-500/30 -skew-x-20 flex items-center justify-center backdrop-blur-md border border-white/20">
          <p className="text-5xl font-bold text-white skew-x-20">Developer</p>
        </div>
      </div>

      <div className="devImg h-[500px] smd:h-[850px] relative z-10 overflow-hidden">
        <img
          className="object-cover grayscale-100"
          loading="lazy"
          src={DevImg}
          alt="Developer Image"
        />
      </div>

      <div className="bottomLinks absolute bottom-0 z-10 w-full pb-10 px-5 flex justify-end xms:justify-between">
        <div className="left hidden xms:flex items-end gap-2 w-1/2">
          <div className="logo w-14 h-14">
            <IoLogoAmplify size={50} color="#e6af2e" />
          </div>

          <p className="text-white text-2xl">
            wake{" "}
            <span className="bg-secondary w-4 h-4 rounded-full inline-block"></span>
            <br />
            upbruh
          </p>
        </div>

        <div className="right text-white flex flex-col items-end gap-3 sm:gap-5 w-full xms:w-1/2">
          <button className="cursor-pointer underline text-xl sm:text-3xl flex items-center gap-3">
            Let's Talk!{" "}
            <span className="bg-secondary flex items-center justify-center w-10 h-10 rounded-full">
              <FaArrowRightLong size={25} color="#1e1e1e" />
            </span>
          </button>

          <button className="cursor-pointer underline text-xl sm:text-3xl flex items-center gap-3">
            View Projects{" "}
            <span className="bg-secondary flex items-center justify-center w-10 h-10 rounded-full">
              <FaArrowRightLong size={25} color="#1e1e1e" />
            </span>
          </button>
        </div>
      </div>

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-400/10 flex flex-col items-center overflow-hidden py-5">
        <h2 className="text-9xl text-yellow-500/40 font-extrabold text-nowrap self-start">
          MERN FULL STACK DEVELOPER
        </h2>
        <h2 className="text-9xl text-yellow-500/50 font-extrabold text-nowrap self-end">
          MERN FULL STACK DEVELOPER
        </h2>
        <h2 className="text-9xl text-yellow-500/50 font-extrabold text-nowrap self-start">
          MERN FULL STACK DEVELOPER
        </h2>
        <h2 className="text-9xl text-yellow-500/50 font-extrabold text-nowrap self-end">
          MERN FULL STACK DEVELOPER
        </h2>
        <h2 className="text-9xl text-yellow-500/50 font-extrabold text-nowrap self-start">
          MERN FULL STACK DEVELOPER
        </h2>
        <h2 className="text-9xl text-yellow-500/50 font-extrabold text-nowrap self-end">
          MERN FULL STACK DEVELOPER
        </h2>
      </div>
    </header>
  );
};

export default Header;
