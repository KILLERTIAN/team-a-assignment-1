import React from 'react';
import Image from 'next/image';

export const Vanaja = () => {
    return (
<div className="flex w-full items-center justify-center bg-[#02030e]">


        <div className="flex w-full max-w-[1140px] p-5 items-center justify-center">
            
            <div className="flex flex-col text-start items-start justify-center gap-3">
                <h1 className='text-[#c9c6ec] text-[30px] w-[519px] font-bold'>
                    AI&apos;s Growing Impact on Industries: 
                    Real-World Examples You Can&apos;t Miss
                </h1>
                <p className="text-[18px] text-[#bdb9e2]">
                    Have you heard of the latest advancement in artificial
                    intelligence?
                </p>
                <p className="text-[18px] text-[#bdb9e2]">
                    AI is able to analyze vast amounts of data and make
                    predictions with unprecedented accuracy. It&apos;s helping
                    businesses increase revenue and gain a competitive edge.
                </p>
                <p className="text-[18px] text-[#bdb9e2]">
                    In this blog, I&apos;ll explore the latest advancements and dive 
                    into the ways this technology is transforming healthcare,
                    finance, manufacturing, and more.
                </p>
                <p className="text-[18px] text-[#bdb9e2] mt-2">
                    <span className="text-[#6B59ED]">Read more</span> as we uncover incredible examples of AI&apos;s impact.
                </p>
            </div>
            <Image src="/industry.png" alt="industry" height={500} width={500} className='bg-[#02030e]' />
        </div>
        </div>
    );
}
