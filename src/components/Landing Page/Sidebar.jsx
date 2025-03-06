import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Button to toggle sidebar */}
            <button onClick={toggleSidebar} className="lg:hidden fixed top-5 left-5">
                <img loading='lazy' src="/Icons/menu-icon.svg" alt="open sidebar" width="30px" />
            </button>

            {/* Sidebar for mobile */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-yellow-600 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:hidden`}>
                <div className="flex justify-end p-5 cursor-pointer" onClick={toggleSidebar}>
                    <img loading='lazy' src="/Icons/cross-icon.svg" width="25px" alt="close icon" />
                </div>
                <ul className="flex flex-col space-y-6 text-white px-10 mt-10">
                    <li><a href='#home' title="Home Page" className="hover:border-b-2 hover:border-yellow-600">Home</a></li>
                    <li><Link to="/blog" className="hover:border-b-2 hover:border-yellow-600">Blog</Link></li>
                    <li><a href='#skill' title="Skill Page" className="hover:border-b-2 hover:border-yellow-600">Skills</a></li>
                    <li><a href='#project' title="Project Page" className="hover:border-b-2 hover:border-yellow-600">Projects</a></li>
                    <li><a href='#contact' title="Contact Page" className="hover:border-b-2 hover:border-yellow-600">Contact</a></li>
                </ul>
                <ul className="flex justify-center space-x-4 absolute bottom-10 w-full">
                    <a href="#"><img loading='lazy' src="/Icons/github.svg" alt="github" /></a>
                    <a href="#"><img loading='lazy' src="/Icons/insta-icon.svg" alt="instagram" /></a>
                    <a href="#"><img loading='lazy' src="/Icons/fb-icon.svg" alt="facebook" /></a>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
