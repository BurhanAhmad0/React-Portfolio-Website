import React from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import ReviewCard from "../ReviewCard";

const Testimonials = () => {
  return (
    <section className="reviewsSection px-20 py-20 bg-primary">
      <div className="testimonialSecHead flex justify-between">
        <div className="left">
          <p className="border border-white inline px-4 py-1 rounded-full font-medium text-xs text-white">
            Our Testimonials
          </p>
          <h2 className="text-5xl font-semibold mt-6 text-white leading-13">
            Trusted By <br /> Leaders
          </h2>
        </div>

        <div className="right">
          <p className="text-sm text-gray-500">
            Leading brands trust us to deliver impact <br /> -and they say it
            best
          </p>

          <div className="arrowBtns flex gap-3 mt-5">
            <div className="prev w-12 h-12 rounded-full border border-white flex items-center justify-center">
              <IoIosArrowRoundBack size={35} color="white" />
            </div>
            <div className="frwd w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <IoIosArrowRoundForward size={35} color="black" />
            </div>
          </div>
        </div>
      </div>

      <div className="reviewCards grid grid-cols-3 gap-5 mt-7">
        {[1, 2, 3].map((index) => {
          return <ReviewCard key={index} />;
        })}
      </div>

      <button className="bg-secondary hover:bg-secondary/75 transition-all duration-300 w-44 py-3 cursor-pointer font-semibold text-amber-800 text-lg rounded-lg mt-12 flex items-center justify-center gap-1">
        View all <IoIosArrowRoundForward size={30} />
      </button>
    </section>
  );
};

export default Testimonials;
