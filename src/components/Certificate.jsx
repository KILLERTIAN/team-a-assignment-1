"use client"
import React from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn';

export const Certificate = () => {
    return (
        <div className="flex w-full items-center justify-center bg-[#02030e] p-5 py-10 overflow-hidden">
            <div className="flex flex-col lg:flex-row w-full max-w-[1140px] items-center justify-between gap-5">
                {/* Text section */}
                <div className="flex flex-col text-start items-start justify-center gap-3">
                    <FadeIn delay={0.2} direction='right'>
                        <h1 className='text-[#c9c6ec] text-[24px] md:text-[30px] w-full md:w-[519px] font-bold'>
                            Certificates you will receive post
                            completion of Artificial Intelligence
                            Course
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.3} direction='right'>
                        <p className="text-[16px] md:text-[18px] text-[#bdb9e2]">
                            We acknowledge your hard work and dedication towards
                            the program by bestowing a course completion
                            certificate from YHills.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4} direction='right'>
                        <p className="text-[16px] md:text-[18px] text-[#bdb9e2]">
                            We also provide internship certificates from YHills and
                            top-hole universities after post successful completion of
                            the internship.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.5} direction='right'>
                        <p className="text-[16px] md:text-[18px] text-[#bdb9e2]">
                            We purvey an Industry certificate from renowned and
                            prestigious companies as an incentive.
                        </p>
                    </FadeIn>

                    {/* <FadeIn delay={0.6} direction='right'>
                    <p className="text-[16px] md:text-[18px] text-[#bdb9e2] mt-2">
                        <span className="text-[#6B59ED]">Read more</span> as we uncover incredible examples of AI&apos;s impact.
                    </p>
                </FadeIn> */}

                </div>

                {/* Image section */}
                <FadeIn delay={0.1} direction='left'>
                    <div className="flex justify-center items-center lg:w-full md:min-w-[500px] w-[300px]">
                        <Image
                            src="/certificate.svg"
                            alt="certificate"
                            height={400}
                            width={555}
                            className='w-full md:w-auto h-auto bg-[#02030e]'
                        />
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
