import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="border-t-4 border-[burlywood] flex flex-col items-center justify-around py-24 gap-8">
            <h1 className="text-6xl font-bold">About</h1>
            <div className="text-center w-3/4">
                <p className="text-xl leading-relaxed">
                    I am a skilled web developer specializing in creating stunning websites using pure HTML, CSS, and JavaScript.
                    With a keen eye for detail and a passion for clean, efficient code, I design websites that are not only
                    visually appealing but also user-friendly and fast-loading. Whether you need a simple landing page, a personal
                    blog, or a complete website overhaul, I am here to bring your vision to life.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
