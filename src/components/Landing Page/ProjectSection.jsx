import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProjectSection = () => {

    const [Projects, setProjects] = useState([])

    const config = {
        headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
        },
    };

    const importProj = async () => {
        try {
            const proj1 = await axios.get('https://api.github.com/repos/BurhanAhmad0/Exclusive-Ecommerce-Website', config);
            const proj2 = await axios.get('https://api.github.com/repos/BurhanAhmad0/Weather-app', config);
            const proj3 = await axios.get('https://api.github.com/repos/BurhanAhmad0/My-Portfolio-Website', config);

            // Update state with the projects
            setProjects([proj1.data, proj2.data, proj3.data]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        importProj();
    }, []);

    const openPDF = () => {
        window.open('/portfolio/AI-Powered-Ecommerce-Website.pdf', '_blank', 'fullscreen=yes');
    }

    return (
        <section id="project" className="border-t-4 border-[burlywood] flex flex-col items-center justify-center py-10 gap-8">
            <h1 className="font-bold text-6xl mb-4">Projects</h1>
            <div className="flex flex-wrap justify-evenly items-center gap-5 w-[80%] pb-4">
                {Projects && Projects.length > 0 ? (
                    Projects.map((project, index) => {
                        return (
                            <div
                                key={index}
                                className="w-[300px] h-[400px] p-6 bg-[burlywood] border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between"
                            >
                                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-900">
                                        {project.name}
                                    </h5>
                                </a>
                                <p className="mb-3 align-top font-normal text-amber-700 overflow-hidden text-ellipsis">
                                    {project.description || 'No description available'}
                                </p>
                                <div className="btns flex gap-2">
                                    <a
                                        href={project.html_url}
                                        target="_blank"
                                        title={project.name}
                                        rel="noopener noreferrer"
                                        className="w-[80%] inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-amber-500 rounded-lg hover:bg-amber-400 transition-all"
                                    >
                                        Read more
                                        <svg
                                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </a>
                                    <button onClick={()=>{openPDF()}} className='cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-amber-700 rounded-lg hover:bg-amber-600 transition-all'>PDF</button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No projects to display</p>
                )}
            </div>
        </section>
    );
};

export default ProjectSection;
