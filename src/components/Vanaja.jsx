"use client"
import React from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn';

export const Vanaja = () => {
    return (
        <div className="flex w-full items-center justify-center bg-[#02030e] p-10 overflow-hidden">
            <div className="flex flex-col lg:flex-row w-full max-w-[1140px] items-center justify-between gap-5">
                {/* Text section */}
                <div className="flex flex-col text-start items-start justify-center gap-3">
                    <FadeIn delay={0.2} direction='right'>
                        <h1 className='text-[#c9c6ec] text-[24px] md:text-[30px] w-full md:w-[519px] font-bold'>
                            AI&apos;s Growing Impact on Industries:
                            Real-World Examples You Can&apos;t Miss
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.3} direction='right'>
                        <p className="text-[16px] md:text-[18px] text-[#bdb9e2]">
                            Have you heard of the latest advancement in artificial intelligence?
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4} direction='right'>
                        <p className="text-[16px] md:text-[18px] text-[#bdb9e2]">
                            AI is able to analyze vast amounts of data and make predictions with unprecedented accuracy. It&apos;s helping businesses increase revenue and gain a competitive edge.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.5} direction='right'>
                        <p className="text-[16px] md:text-[18px] text-[#bdb9e2]">
                            In this blog, I&apos;ll explore the latest advancements and dive into the ways this technology is transforming healthcare, finance, manufacturing, and more.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6} direction='right'>
                        <p className="text-[16px] md:text-[18px] text-[#bdb9e2] mt-2">
                            <span className="text-[#6B59ED]">Read more</span> as we uncover incredible examples of AI&apos;s impact.
                        </p>
                    </FadeIn>

                </div>

                {/* Image section */}
                <FadeIn delay={0.1} direction='left'>
                    <div className="flex justify-center items-center h-full lg:w-full md:min-w-[500px] w-[300px]">
                        <Image
                            src="/industry.png"
                            alt="industry"
                            height={500}
                            width={500}
                            className='w-full md:w-auto h-auto bg-[#02030e]'
                        />
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
