"use client"
import React from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn'; // Assuming FadeIn is properly implemented

export const Feedback = () => {
    return (
        <div className="w-full bg-black flex items-center justify-center text-white p-5">
            <div className="flex flex-col xl:flex-row items-center justify-center w-full max-w-[1140px]">
                {/* Purple box */}
                <div className="flex flex-col items-start justify-center bg-[#6B59ED] w-full xl:w-[380px] p-8 gap-3 xl:h-[800px] lg:min-h-[400px]">
                    <FadeIn delay={0.2} direction="up">
                        <h1 className="text-2xl lg:text-4xl font-bold uppercase mb-4">
                            Hear what our students say
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.4} direction="up">
                        <div className="flex flex-row items-center justify-start mb-4">
                            <div className="w-8 h-1 bg-[#EB9F00] mr-2"></div>
                            <div className="w-12 h-1 bg-gray-400"></div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.6} direction="up">
                        <p className="text-sm lg:text-base italic">40,000+ Students have already learned with YHills!</p>
                    </FadeIn>
                </div>

                {/* Feedbacks */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-8 lg:mt-0 w-full lg:w-[765px]">
                    {[{
                        text: "I am so glad I chose YHills to help us with our artificial intelligence project. They were extremely professional and knowledgeable, and they completed the project well within the time frame they gave us. I would highly recommend it to anyone.",
                        name: "Sarthak Maheshwari",
                        title: "Data Engineer Intern",
                        img: "/user1.svg"
                    }, {
                        text: "I've always been interested in learning more about artificial intelligence and machine learning, but I never knew where to start. This course was so helpful! It was well-organized, easy to follow, and taught me a ton of useful information.",
                        name: "Zeshan Yusuf",
                        title: "AI Engineer Intern",
                        img: "/user1.svg"
                    }, {
                        text: "I think this is the best AI course I have ever taken. It's well-organized, the instructor is great, and the material is fascinating. I learned more than I ever thought possible and would recommend this course to anyone.",
                        name: "Sagar Dhawan",
                        title: "AI Engineer",
                        img: "/user1.svg"
                    }, {
                        text: "I thought this course was going to be really difficult, but it's actually pretty easy. I mean, there's a lot of information, but the instructor explains it really clearly and makes sure everyone understands. Highly Recommendable!",
                        name: "Eliza",
                        title: "Data Scientist Intern",
                        img: "/user2.svg"
                    }].map((feedback, index) => (
                        <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                            <div className="flex flex-col p-6 lg:p-10 items-center justify-center w-full max-w-[370px] bg-[#0b0514] text-[#bdb9e2] gap-6 rounded-lg shadow-lg">
                                <p className="text-sm lg:text-lg text-start">{feedback.text}</p>
                                <div className="flex flex-row items-center justify-between w-full">
                                    <Image src={feedback.img} alt="user" height={50} width={50} />
                                    <div className="flex flex-col items-start justify-center text-center lg:text-left">
                                        <h2 className="text-sm lg:text-[16px] text-[#6B59ED] font-semibold">{feedback.name}</h2>
                                        <h3 className="text-xs lg:text-[13px]">{feedback.title}</h3>
                                    </div>
                                    <Image src="/apostrophe.svg" alt="apostrophe" height={50} width={50} />
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
}
