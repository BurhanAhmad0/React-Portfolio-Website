import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";

import FooterImg from "../../assets/devImg.webp";

const Footer = () => {
  return (
    <footer className="px-5 md:px-10 lg:px-20 bg-primary">
      <div className="CTA flex flex-col mlg:flex-row justify-between items-center gap-16 py-10">
        <div className="getConsultation w-full mlg:w-1/2">
          <p className="border border-white inline px-4 py-1 rounded-full font-medium text-xs text-white">
            Contact
          </p>
          <h2 className="text-3xl font-semibold mt-6 text-white">
            Get in touch
          </h2>
          <div className="emailInput mt-6 p-2 rounded-full flex items-center border border-gray-300 bg-gray-500/25">
            <input
              className="flex-1 px-2 xsm:px-4 py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
            />
            <button className="bg-secondary text-white px-2 xms:px-6 py-2 rounded-full hover:bg-secondary/75 cursor-pointer transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        <div className="footerimg w-full h-96 mlg:w-1/2 rounded-xl overflow-hidden">
          <img
            loading="lazy"
            className="object-cover object-top w-full h-full"
            src={FooterImg}
            alt="Footer Image"
          />
        </div>
      </div>

      <div className="footerLinks pb-16 flex flex-col mlg:flex-row justify-between gap-20">
        <div className="leftSection w-full mlg:w-1/2">
          <h2 className="text-3xl font-bold mt-6 text-yellow-500">
            Burhan Ahmad
          </h2>
          <p className="mt-4 text-white text-sm">
            Building strong brand identities, and developing websites and social
            media applications.
          </p>
          <div className="socialIcons flex gap-2 mt-6">
            <Link
              target="_blank"
              to={
                "https://www.fiverr.com/ahmadburhan153/be-your-react-js-node-js-developer-and-integrate-apis-to-website-applications?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=4065eda2353f49fe81e724dabb54fb5a&context=recommendation&pckg_id=1&pos=2&context_alg=recently_viewed&imp_id=67d84d59-9a61-4f66-b8c1-079b340a58fb"
              }
              className="twitter border border-gray-400 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/75 transition duration-300"
            >
              <TbBrandFiverr color="white" size={20} />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/burhan-developer/"}
              className="linkedIn border border-gray-400 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/75 transition duration-300"
            >
              <FaLinkedin color="white" size={20} />
            </Link>
            <Link
              target="_blank"
              to={"https://www.facebook.com/codiqon"}
              className="facebook border border-gray-400 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/75 transition duration-300"
            >
              <FaFacebook color="white" size={20} />
            </Link>
            <Link
              target="_blank"
              to={"https://www.instagram.com/codiqon/"}
              className="instagram border border-gray-400 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/75 transition duration-300"
            >
              <AiFillInstagram color="white" size={20} />
            </Link>
          </div>
        </div>

        <div className="rightSection w-full mlg:w-1/2 grid grid-cols-1 xxs:grid-cols-2 xms:grid-cols-3 gap-7">
          <div className="column1">
            <h4 className="text-white font-semibold">Explore</h4>
            <ul className="mt-4 text-white text-sm space-y-1">
              <li>What We Offer</li>
              <li>Case Studies</li>
              <li>Blog & Insights</li>
              <li>Resources</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="column2">
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="mt-4 text-white text-sm space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Testimonials</li>
              <li>Pricing</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="column3">
            <h4 className="text-white font-semibold">Legal Links</h4>
            <ul className="mt-4 text-white text-sm space-y-1">
              <li>What We Offer</li>
              <li>Case Studies</li>
              <li>Blog & Insights</li>
              <li>Resources</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="Copyright border-t border-gray-300 py-7 text-center">
        <p className="text-sm text-gray-600">
          &copy; Burhan Ahmad Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
