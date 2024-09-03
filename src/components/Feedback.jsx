import React from 'react';
import Image from 'next/image';

export const Feedback = () => {
    return (
        <div className="w-full  bg-black flex items-center justify-center text-white">
            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1140px] h-full ">
                {/* Purple box */}
                <div className="flex flex-col items-start justify-center bg-[#6B59ED] w-full h-[300px] lg:w-[380px] lg:h-[800px] p-8 gap-3">
                    <h1 className="text-4xl text-white font-bold uppercase ">Hear what our
                        students says
                    </h1>
                    <div className="flex flex-row items-center justify-start">
                        <div className="w-10 h-1 bg-[#EB9F00]"></div>
                        <div className="w-16 h-1 bg-gray-400"></div>
                    </div>
                    <p className="text-[16px] italic text-white">40,000+ Students have already
                        learned with YHills!</p>
                </div>
                {/* Feedbacks */}
                <div className="flex flex-wrap items-center justify-center gap-4 w-[765px] h-full">
                    <div className="flex flex-col p-10 items-center justify-center w-[370px] h-[400px] bg-[#0b0514] text-[#bdb9e2] gap-8">
                        <p className="text-lg ">
                            I am so glad I chose YHills to help us
                            with our artificial intelligence
                            project. They were extremely
                            professional and knowledgeable,
                            and they completed the project well
                            within the time frame they gave us. I
                            would highly recommend it to
                            anyone.
                        </p>
                        <div className="flex flex-row items-center justify-between w-full">
                            <Image src="/user1.svg" alt="arrow" height={50} width={50} />
                            <div className="flex flex-col items-start justify-center ">
                                <h2 className="text-[16px] text-[#6B59ED] font-semibold">Sarthak Maheshwari</h2>
                                <h3 className="text-[13px] ">Data Engineer Intern</h3>
                            </div>
                            <Image src="/apostrophe.svg" alt="arrow" height={50} width={50} />

                        </div>
                    </div>
                    <div className="flex flex-col p-10 items-center justify-center w-[370px] h-[400px] bg-[#0b0514] text-[#bdb9e2] gap-8">
                        <p className="text-lg ">
                            I am so glad I chose YHills to help us
                            with our artificial intelligence
                            project. They were extremely
                            professional and knowledgeable,
                            and they completed the project well
                            within the time frame they gave us. I
                            would highly recommend it to
                            anyone.
                        </p>
                        <div className="flex flex-row items-center justify-between w-full">
                            <Image src="/user1.svg" alt="arrow" height={50} width={50} />
                            <div className="flex flex-col items-start justify-center ">
                                <h2 className="text-[16px] text-[#6B59ED] font-semibold">Sarthak Maheshwari</h2>
                                <h3 className="text-[13px] ">Data Engineer Intern</h3>
                            </div>
                            <Image src="/apostrophe.svg" alt="arrow" height={50} width={50} />

                        </div>
                    </div>
                    <div className="flex flex-col p-10 items-center justify-center w-[370px] h-[400px] bg-[#0b0514] text-[#bdb9e2] gap-8">
                        <p className="text-lg ">
                            I am so glad I chose YHills to help us
                            with our artificial intelligence
                            project. They were extremely
                            professional and knowledgeable,
                            and they completed the project well
                            within the time frame they gave us. I
                            would highly recommend it to
                            anyone.
                        </p>
                        <div className="flex flex-row items-center justify-between w-full">
                            <Image src="/user1.svg" alt="arrow" height={50} width={50} />
                            <div className="flex flex-col items-start justify-center ">
                                <h2 className="text-[16px] text-[#6B59ED] font-semibold">Sarthak Maheshwari</h2>
                                <h3 className="text-[13px] ">Data Engineer Intern</h3>
                            </div>
                            <Image src="/apostrophe.svg" alt="arrow" height={50} width={50} />

                        </div>
                    </div>
                    <div className="flex flex-col p-10 items-center justify-center w-[370px] h-[400px] bg-[#0b0514] text-[#bdb9e2] gap-8">
                        <p className="text-lg ">
                            I am so glad I chose YHills to help us
                            with our artificial intelligence
                            project. They were extremely
                            professional and knowledgeable,
                            and they completed the project well
                            within the time frame they gave us. I
                            would highly recommend it to
                            anyone.
                        </p>
                        <div className="flex flex-row items-center justify-between w-full">
                            <Image src="/user1.svg" alt="arrow" height={50} width={50} />
                            <div className="flex flex-col items-start justify-center ">
                                <h2 className="text-[16px] text-[#6B59ED] font-semibold">Sarthak Maheshwari</h2>
                                <h3 className="text-[13px] ">Data Engineer Intern</h3>
                            </div>
                            <Image src="/apostrophe.svg" alt="arrow" height={50} width={50} />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
