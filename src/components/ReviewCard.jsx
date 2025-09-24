import React from "react";
import { FaStar } from "react-icons/fa6";

import ReviewImg1 from "../assets/devImg.webp";

const ReviewCard = () => {
  return (
    <div className="bg-secondary rounded-xl p-2 w-full">
      <div className="reviewThumbnail h-80 md:h-60 overflow-hidden">
        <img
          className="w-full h-full object-cover object-top"
          loading="lazy"
          src={ReviewImg1}
          alt="Client Image"
        />
      </div>

      <div className="bottomDesk bg-primary/20 p-2 rounded-xl">
        <div className="userInfo flex justify-between">
          <h4 className="font-semibold text-black">Michael Dixon</h4>
          <p className="font-medium text-black">CEO</p>
        </div>

        <div className="rating flex gap-3 mt-2">
          <p className="font-semibold text-black">4.0</p>

          <div className="starRating flex gap-1">
            <FaStar color="black" size={18} />
            <FaStar color="black" size={18} />
            <FaStar color="black" size={18} />
            <FaStar color="black" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
