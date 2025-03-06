import React from 'react';

const Testimonials = () => {
    return (
        <section className="client-reviews py-14 border-t-4 border-[burlywood]">
            <h1 className="font-bold text-center mb-10 text-6xl">Testimonials</h1>
            <div className="reviews grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
                {/* Example of a review card */}
                <div className="max-w-sm p-6 bg-[burlywood] border border-gray-200 rounded-lg shadow-sm">
                    <svg
                        className="w-7 h-7 text-amber-700 mb-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                    </svg>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-amber-900">
                            Need help in Claim?
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-amber-700">
                        Go to this step by step guideline process on how to certify for your weekly benefits:
                    </p>
                    <a
                        href="#"
                        className="inline-flex font-medium items-center text-amber-900 hover:underline"
                    >
                        See more
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
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
