import React, { useState } from 'react';
import { Client, Databases, ID } from "appwrite";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('67c6bd2300386b359d55');

    const databases = new Databases(client);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        try {
            const response = await databases.createDocument(
                '67c7d35200340bef1c78', // Replace with your database ID
                '67c7d8650023cb671d9f', // Replace with your collection ID
                ID.unique(), // Unique ID for the document
                {
                    user_email: email,
                    user_enquiry: comment,
                }
            );
            // console.log('Document created successfully:', response);
            // Optionally, clear the form after submission
            setEmail('');
            setComment('');
        } catch (error) {
            console.error('Error creating document:', error);
        }
    };

    function currentYear() {
        return new Date().getFullYear();
    }

    return (
        <footer id='contact' className="border-t-5 border-[burlywood]">
            <div className="w-full max-w-[45vw] h-[57vh] my-20 mx-auto pt-10 flex items-center justify-center">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-8">
                        <label
                            htmlFor="email"
                            className="mb-2 text-black font-medium"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 mt-1 border border-[#d2b48c] bg-[whitesmoke] rounded-md text-[16px] transition-shadow duration-500 focus:outline-none focus:ring-3 focus:ring-[burlywood]"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <small className="text-[12px] text-[#a0522d]">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="mb-8">
                        <label
                            htmlFor="cmnt"
                            className="mb-2 text-black font-medium"
                        >
                            Enquiry
                        </label>
                        <textarea
                            id="cmnt"
                            className="w-full h-52 p-2 mt-1 border border-[#d2b48c] bg-[whitesmoke] rounded-md text-[16px] transition-shadow duration-500 focus:outline-none focus:ring-3 focus:ring-[burlywood] resize-none"
                            rows="3"
                            placeholder="Write Here"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="py-2 px-4 bg-primary bg-[rgb(222,184,135)] text-amber-700 rounded-md font-medium transition-all cursor-pointer hover:bg-[rgb(193,157,110)] hover:border-primary hover:text-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <div className="bg-footer-color p-5 text-center flex items-center justify-around border-t border-[#d2b48c]">
                <p className="text-[14px] text-[#8b4513] font-light m-0">
                    &copy; {currentYear()} Burhan Ahmad. All rights reserved.
                </p>
                <div className="flex space-x-2">
                    <a
                        target="_blank"
                        href="https://www.facebook.com/profile.php?id=61559623928944"
                    >
                        <img
                            loading='lazy'
                            className="invert mx-2"
                            src="/Icons/fb-icon.svg"
                            alt="Facebook"
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/burhan_ahmad001/"
                    >
                        <img
                            loading='lazy'
                            className="invert mx-2"
                            src="/Icons/insta-icon.svg"
                            alt="Instagram"
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.tiktok.com/@burhan.developer?is_from_webapp=1&sender_device=pc"
                    >
                        <img
                            loading='lazy' className="mx-2" src="/Icons/tiktok.svg" alt="TikTok" />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.youtube.com/@BurhanDeveloper"
                    >
                        <img
                            loading='lazy' className="mx-2" src="/Icons/youtube.svg" alt="YouTube" />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/burhan-ahmad-a8567a241/"
                    >
                        <img
                            loading='lazy'
                            className="mx-2"
                            src="/Icons/linkedin.svg"
                            alt="LinkedIn"
                        />
                    </a>
                    <a target="_blank" href="https://pin.it/4zcKKJYQd">
                        <img
                            loading='lazy' className="mx-2" src="/Icons/pinterest.svg" alt="Pinterest" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
