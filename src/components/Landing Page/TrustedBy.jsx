import React from 'react';

const TrustedBy = () => {
    return (
        <section className="trusted-by flex flex-col justify-center items-center py-24 gap-8 border-t-4 border-[burlywood]">
            <h1 className="font-bold text-6xl mb-4">Trusted By</h1>
            <div className="company-logo flex justify-center items-center gap-14 overflow-x-scroll hide-scrollbar">
                <img src="/Img/trusted-by-img1.png" alt="Company 1" className="w-64" />
                <img src="/Img/trusted-by-img2.png" alt="Company 2" className="w-64" />
                <img src="/Img/trusted-by-img3.png" alt="Company 3" className="w-64" />
            </div>
        </section>
    );
};

export default TrustedBy;
