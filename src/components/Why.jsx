"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import FadeIn from './FadeIn';

export const Why = () => {
    const [openIndex, setOpenIndex] = useState(1);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        setOpenIndex(1);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-auto bg-[#08040f] gap-10 p-6 lg:p-10">
            {/* Accordion Section */}
            <div className="flex flex-col w-full max-w-[700px] items-center justify-center py-8 px-4 sm:px-8">
                {[...Array(4)].map((_, i) => (
                    <FadeIn key={i + 1} delay={0.1 + i * 0.1} direction="up" fullWidth>
                        <div className="w-full mb-4">
                            <div
                                className={`flex justify-between items-center w-full p-4 cursor-pointer border ${openIndex === i + 1
                                    ? 'bg-[#6B59ED] text-white border-[#6B59ED] rounded-t-[10px]'
                                    : 'bg-[#0d0f1c] text-white border-[#0c0e1e] rounded-[10px]'
                                    } hover:bg-[#4e41d6] transition-all duration-300 ease-in-out transform ${openIndex === i + 1 ? 'scale-105' : 'scale-100'}`}
                                onClick={() => handleToggle(i + 1)}
                            >
                                <h2 className="text-[18px] sm:text-[20px] font-semibold">
                                    {i === 0 && 'What You’ll Learn?'}
                                    {i === 1 && 'Requirements'}
                                    {i === 2 && 'Description'}
                                    {i === 3 && 'Who is this course for?'}
                                </h2>
                                <Image
                                    src={openIndex === i + 1 ? '/minus.svg' : '/plus.svg'}
                                    alt={openIndex === i + 1 ? 'Collapse' : 'Expand'}
                                    height={20}
                                    width={17}
                                    className="transition-transform duration-300 ease-in-out"
                                />
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i + 1 ? 'max-h-[500px] py-4' : 'max-h-0'
                                    } bg-[#0b0514] px-4 sm:px-8`}
                            >
                                <ul className="list-disc text-[16px] sm:text-[18px] text-[#c9c6ec] space-y-2 ml-4">
                                    {i === 0 && (
                                        <>
                                            <li>Assemble an AI</li>
                                            <li>Comprehend the hypothesis behind Artificial Intelligence</li>
                                            <li>Make a virtual Self Driving Car</li>
                                            <li>Make AI beat games</li>
                                            <li>Tackle Real World Problems with AI</li>
                                            <li>Expert the State of the Art AI models</li>
                                            <li>Q-Learning</li>
                                            <li>Profound Q-Learning</li>
                                            <li>Profound Convolutional Q-Learning</li>
                                            <li>A3C</li>
                                        </>
                                    )}
                                    {i === 1 && (
                                        <>
                                            <li>Secondary School Maths </li>
                                            <li>Fundamental Python</li>
                                        </>
                                    )}
                                    {i === 2 && (
                                        <p>Looking to jump into the world of Artificial Intelligence? This course is perfect for beginners who want to learn the basics of AI and how to apply it to their business or project. You'll learn about the different types of AI, how to choose the right AI technology, and how to implement AI into your work.</p>
                                    )}
                                    {i === 3 && (
                                        <p>Anybody intrigued by Artificial Intelligence, Machine Learning, or Deep Learning</p>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            {/* Why Study AI Section */}
            <div className="flex flex-col items-center lg:items-start justify-center w-full max-w-[400px]">
                <FadeIn delay={0.2} direction="up">
                    <h1 className="text-center lg:text-start text-[#c9c6ec] font-poppins text-[24px] md:text-[30px] font-semibold mb-8">
                        Why Study Artificial Intelligence?
                    </h1>
                </FadeIn>
                <div className="flex flex-col gap-6 text-[#c9c6ec]">
                    {[
                        { icon: '/flash.svg', title: 'High Demand', text: 'Mastering an AI course will lead directly to high-demand jobs.' },
                        { icon: '/support.svg', title: '24/7 Support', text: 'Our course provides continuous support and guidance.' },
                        { icon: '/money.svg', title: 'High Salary', text: 'AI professionals enjoy lucrative salaries and benefits.' },
                        { icon: '/rocket.svg', title: 'Career Growth', text: 'AI skills propel you into fast-growing industries.' }
                    ].map(({ icon, title, text }, i) => (
                        <FadeIn key={i + 1} delay={0.1 + i * 0.1} direction="up" fullWidth>
                            <div
                                key={i}
                                className="flex items-center hover:bg-[#1f1937] hover:border-l-4 hover:border-[#4e41d6] p-4 rounded-lg transition-all duration-300 ease-in shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                <Image
                                    src={icon}
                                    alt={title}
                                    height={45}
                                    width={45}
                                    className="transform hover:scale-110 transition-transform duration-300 ease-in-out"
                                />
                                <div className="flex flex-col items-start justify-center w-full max-w-[300px] pl-10">
                                    <h2 className="text-[18px] sm:text-[20px] font-semibold hover:text-[#b1a6f9] transition-colors duration-300 ease-in-out">{title}</h2>
                                    <p className="text-[14px] sm:text-[16px]">{text}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
}
