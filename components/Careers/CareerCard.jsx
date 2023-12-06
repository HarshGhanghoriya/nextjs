"use client"
import React, { useRef, useState } from 'react';
import Slider from "react-slick";

const careerCardDatas = [
    {
        id: 1,
        image: "./images/persons.svg",
        name: "Customer First"
    },
    {
        id: 2,
        image: "./images/person.svg",
        name: "Be Persistent Yet Flexible"
    },
    {
        id: 3,
        image: "./images/brain.svg",
        name: "Be Curious"
    },
    {
        id: 4,
        image: "./images/tick.svg",
        name: "Just Do It"
    },
    {
        id: 3,
        image: "./images/trophy.svg",
        name: "We Win Together, We Learn Together"
    },
    {
        id: 4,
        image: "./images/brainstorm-idea.svg",
        name: "Think Like an Entrepreneur"
    },
]

const CareerCard = () => {
    // const containerRef = useRef(null);
    // const [scrollPosition, setScrollPosition] = useState(0);

    // const handleScroll = () => {
    //     const container = containerRef.current;
    //     if (container) {
    //         const { scrollTop, scrollHeight, clientHeight } = container;
    //         if (scrollTop + clientHeight >= scrollHeight) {
    //             // Reached or passed the end, reset to the top
    //             setScrollPosition(0);
    //         } else {
    //             setScrollPosition(scrollTop);
    //         }
    //     }
    // };
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        autoplaySpeed: 2000,
        vertical: true,
        verticalSwiping: true,
      }
    return (
        <>
            <div className='flex justify-between my-10'>
                <div className='w-[49%]'>
                    <div className="flex flex-col w-[70%] relative pl-4">
                        <div className="h-[80px] w-[40px] whatWeDoBar bg-[#F15B2A] absolute -left-7 -top-6"></div>
                        <h2 className='text-4xl'>Why Be An Elchemist</h2>
                        <h4 className='pt-7 pb-5 pr-8 text-lg'>At Elchemy, we catalyze your professional growth and personal success.</h4>
                        <h4 className='pt-7 pb-5 text-lg'>Our Core Values, our North Star, guide us on a shared path for organizational and personal success, illuminating the way forward and driving excellence in all we do.</h4>
                        <button type="button" className="w-[150px] py-2.5 px-8 me-2 mb-2 text-sm font-medium bg-[#EF4136] text-[#FFF] rounded-[4px]">Join US</button>
                    </div>
                </div>
                <div className='w-[49%]'>
                    <div className='flex justify-between items-center flex-wrap overflow-y-auto max-h-[450px] scrollbar-hide'>
                        <Slider {...settings}>
                            {
                                careerCardDatas.map((careerCardData, index) => (
                                    <div className='w-[49%] mb-4' key={careerCardData?.id}>
                                        <div className="bg-[#F1F2F2] py-10 pl-5 pr-3 h-[230px] w-auto">
                                            <img src={careerCardData?.image} alt={careerCardData?.name} className='h-[70px] w-[70px]' />
                                            <h4 className='pt-8 font-normal text-xl'>{careerCardData?.name}</h4>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>

                    </div>

                </div>
            </div>
        </>
    )
}

export default CareerCard