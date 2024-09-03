"use client";
import React from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn';

export const Mentors = () => {
    const mentors = [
        {
            name: 'Garima Mittal',
            title: 'AutoCAD Trainer',
            img: '/Garima-Mittal.webp.svg',
        },
        {
            name: 'Indrajeet Kumar',
            title: 'Full Stack Developer',
            img: '/Mentor-3-2-2.webp.svg',
        },
        {
            name: 'Uttam Grade',
            title: 'Data Scientist',
            img: '/Mentor-3-2-1.webp.svg',
        },
        {
            name: 'Vaishnavu C V',
            title: 'Cyber Security Consultant',
            img: '/Mentor-3-2-3.webp.svg',
        },
        {
            name: 'T. Raja Stephenson',
            title: 'Digital Marketing Expert',
            img: '/H-Tittu-Raja-Stephenson.webp.svg',
        },
    ];

    return (
        <div className="flex w-full items-center justify-center bg-[#02030e] p-5">
            <div className="flex flex-col w-full max-w-[1170px]">
                {/* Text part */}
                <div className="flex flex-col text-center items-center justify-center mb-8">
                    <FadeIn delay={0.2} direction="up">
                        <h1 className="text-[28px] md:text-[32px] font-semibold text-[#c9c6ec] mb-3">Meet Our Mentors</h1>
                    </FadeIn>
                    <FadeIn delay={0.2} direction="up">
                        <p className="text-base md:text-lg italic text-[#bdb9e2] max-w-[640px]">
                            We are ready to assist, advise, encourage and listen as you begin your professional courses at YHills.
                        </p>
                    </FadeIn>
                </div>

                {/* Image part */}
                <div className="flex flex-wrap items-center justify-center md:justify-evenly gap-4">
                    {mentors.map((mentor, index) => (
                        <FadeIn key={index} delay={0.1 * index} direction="up">
                            <div
                                className="relative flex flex-col w-[220px] bg-[#02030e] rounded-lg h-[275px] items-center justify-center transform hover:scale-105 transition-transform duration-300 ease-in-out mb-10"
                            >
                                <Image
                                    src={mentor.img}
                                    alt={mentor.name}
                                    height={110}
                                    width={110}
                                    className="absolute top-[-20px] z-[5]"
                                />
                                <div className="absolute flex flex-col w-[220px] min-h-[220px] bg-[#5743E2] rounded-lg bottom-0 pt-[30px] items-center justify-center">
                                    <h2 className="text-[16px] text-white font-semibold pb-2">{mentor.name}</h2>
                                    <div className="w-[160px] border-t border-gray-500 pb-2"></div>
                                    <p className="text-[13px] text-[#F5FF11] pb-2">{mentor.title}</p>
                                    <div className="flex items-center justify-center p-[12px] rounded-lg bg-[#77777742] hover:bg-[#6B59ED] transition-colors duration-300 ease-in-out">
                                        <Image src="/linkedin.svg" alt="LinkedIn" height={25} width={25} />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
};
