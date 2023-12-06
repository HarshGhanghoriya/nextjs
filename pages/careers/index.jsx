import Header from '@/components/Header'
import React from 'react'
import Head from 'next/head'
import AnimatedTitleHeader from '@/components/TitleHeader/AnimatedTitleHeader'
import HiringCard from '@/components/Careers/HiringCard'
import WorkingWithUs from '@/components/Careers/WorkingWithUs'
import CareerCard from '@/components/Careers/CareerCard'
import WhyWorkWithUs from '@/components/Careers/WhyWorkWithUs'

const careers = () => {
    return (
        <>
            <Head>
                <title>DOM | Elchemy</title>
                <meta name="Elchemy DOM Page" content="Elchemy DOM Page" key="desc" />
            </Head>
            <div className="w-full h-16 "></div>
            <AnimatedTitleHeader text={"Contact Us"} />
            <div className="bg-[#FFFF] md:pl-20 md:pr-20 md:pt-5 md:pb-5 p-10">
                
                {/* <CareerCard /> */}
                {/* <WhyWorkWithUs/> */}
                <HiringCard />
                <WorkingWithUs />
            </div>

        </>
    )
}

export default careers