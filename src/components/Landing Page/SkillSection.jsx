import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
    '/Icons/html.svg',
    '/Icons/css.svg',
    '/Icons/js.svg',
    // Add more image paths as needed
];

const SkillSection = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(1); // Track the slide direction

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1); // Forward direction
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const handlePrevClick = () => {
        setDirection(-1); // Backward direction
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setDirection(1); // Forward direction
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <section id="skill" className="border-t-4 border-[burlywood] flex flex-col items-center py-14 gap-8">
            <h1 className="text-6xl font-bold text-center">Skills</h1>
            <div className="flex flex-col gap-16 w-4/5">
                <div className="flex flex-col gap-10">
                    <div className="w-full">
                        <div className="w-3/5 pl-4">
                            <p className="text-xl">
                                <span className="font-bold">1. HTML Sculpting:</span> Crafting the backbone of web structures, I shape HTML into meaningful, accessible layouts, ensuring every tag serves its purpose.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="ml-auto w-3/5 pr-4 text-right">
                            <p className="text-xl">
                                <span className="font-bold">2. CSS Artistry:</span> Bringing designs to life with CSS, I create fluid layouts, stunning animations, and responsive designs using Flexbox, Grid, and more.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-3/5 pl-4">
                            <p className="text-xl">
                                <span className="font-bold">3. JavaScript Choreography:</span> With JavaScript, I orchestrate user interactions, handle dynamic content, and ensure seamless API integration for a responsive web experience.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="ml-auto w-3/5 pr-4 text-right">
                            <p className="text-xl">
                                <span className="font-bold">4. Debugging Wizardry:</span> With a keen eye for detail, I diagnose and fix bugs, maintaining clean, efficient code. Git is my trusted ally for version control and project management.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="slideshow-container relative overflow-hidden w-full h-60 flex items-center justify-center">
                    <AnimatePresence exitBeforeEnter custom={direction}>
                        <button className="absolute left-0 cursor-pointer z-10 text-5xl" onClick={handlePrevClick}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                viewBox="0 0 24 24"
                                style={{ fill: "rgb(222,184,135)" }}
                            >
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                            </svg>
                        </button>
                        <motion.img
                            key={currentImageIndex}
                            src={images[currentImageIndex]}
                            initial={{ x: direction > 0 ? 300 : -300, opacity: 0.5 }}
                            animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                            custom={direction}
                            className="absolute w-52 h-52 object-cover"
                            alt={`Slide ${currentImageIndex + 1}`}
                        />
                    </AnimatePresence>
                    <button className="absolute right-0 cursor-pointer z-10 text-5xl text-gray-300" onClick={handleNextClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            style={{ fill: "rgb(222,184,135)" }}
                        >
                            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                        </svg>
                    </button>
                </div>
            </div>

        </section>
    );
};

export default SkillSection;
