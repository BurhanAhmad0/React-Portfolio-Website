import React from 'react'
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar'

const Header = () => {

    const handleScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Scroll smoothly to the target element
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header-bg">
            <nav className="flex justify-end relative p-5 pr-16">
                <ul className="hidden lg:flex space-x-8 text-white">
                    <li><a onClick={() => {handleScroll('home')}} title="Home Page" className="menu-link cursor-pointer">Home</a></li>
                    <li><a onClick={() => {handleScroll('about')}} title="About Page" className="menu-link cursor-pointer">About</a></li>
                    <li><a onClick={() => {handleScroll('project')}} title="Project Page" className="menu-link cursor-pointer">Projects</a></li>
                    <li><Link to='/blog' title="Skill Page" className="menu-link cursor-pointer">Blog</Link></li>
                    <li><a onClick={() => {handleScroll('contact')}} title="Contact Page" className="menu-link cursor-pointer">Contact</a></li>
                </ul>
            </nav>

            <Sidebar />

            {/* Hero Section */}
            <div id='home' className="flex justify-around items-center h-screen">
                <div className="h-96 flex flex-col justify-center text-white text-2xl">
                    <h1 className="text-6xl font-bold leading-16">Hi, I'm <br /><span className="mt-1 text-yellow-500 text-6xl">Burhan Ahmad</span></h1>
                    <h3 className="mt-3 font-light">I'm A Full Stack Web-Developer Based In Pakistan.</h3>
                    <a href="/resume/Resume.pdf" download className="mt-5 px-4 py-2 bg-yellow-600 text-white rounded-md text-lg w-fit transition-all hover:bg-yellow-500">Read More</a>
                </div>
                <div className="hidden md:block">
                    <img loading='lazy' src="/Img/profile-img.jpg" width="350px" alt="Profile Image" className="rounded-full shadow-xl opacity-95" />
                </div>
            </div>
        </header>
    )
}

export default Header
