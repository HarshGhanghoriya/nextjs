import React from 'react'

const ExpertiseAnimationCard = () => {
    const datas = [
        {
            id: 1,
            image: "./images/tailored.svg",
            name: "Tailored Chemical Solutions",
            desc: "With our streamlined processes and efficient logistics, we can get your products to you in record time",
            icon: "01"
        },
        {
            id: 2,
            image: "./images/quality.svg",
            name: "Quality Commitment",
            desc: "Our unwavering commitment to quality ensures that every product we manufacture meets the highest industry standards, providing you with confidence in every batch",
            icon: "02"
        },
        {
            id: 3,
            image: "./images/streamlines.svg",
            name: "Diverse Streamlines Projects",
            desc: "Experience seamless project execution with our agile project management, guaranteeing on-time deliveries and cost-effective solutions, every time",
            icon: "03"
        },
        {
            id: 4,
            image: "./images/confidentiality.svg",
            name: "High Confidentiality & Trusted Partnership",
            desc: "Rest easy knowing that your proprietary formulations and sensitive data are handled with the utmost confidentiality, safeguarded by our stringent security protocols",
            icon: "04"
        },
        {
            id: 5,
            image: "./images/cost.svg",
            name: "Cost Efficiency",
            desc: "Experience significant cost-efficiency gains in your custom chemical manufacturing projects through our optimized processes, delivering both exceptional quality and budget-friendly solution",
            icon: "05"
        },
        {
            id: 6,
            image: "./images/technology.svg",
            name: "Technology-Driven Operations",
            desc: "Experience significant cost-efficiency gains in your custom chemical manufacturing projects through our optimized processes, delivering both exceptional quality and budget-friendly solution",
            icon: "06"
        },
    ]
    return (
        <div className='w-full flex justify-between items-center bg-slate-300'>
            <div className="w-[49%]  py-6 relative">
                <div className="h-[70px] w-[27px] whatWeDoBar bg-[#F15B2A] absolute -left-2 -top-2"></div>
                <h2 className='text-3xl mb-2 pl-5'>Elchemy Expertise</h2>
                {/* {datas.map((data) => {
                    return (
                        <div className="flex flex-col gap-4 w-[70%] pl-5" key={data.id}>
                            <h3 className='text-3xl mb-1 pt-10'>{data.name}</h3>
                            <div className='pt-2 pb-5 text-lg'>{data.desc}
                            </div>
                            <button type="button" className="w-[150px] py-2.5 px-8 me-2 mb-2 mt-10 text-sm font-medium bg-[#EF4136] text-[#FFF] rounded-[4px]">Join US</button>
                        </div>
                    )
                })} */}
                <div className="flex flex-col gap-4 w-[70%] pl-5" key={datas[0].id}>
                    <h3 className='text-2xl mb-1 pt-10'>{datas[0].name}</h3>
                    <div className='pt-2 pb-5 text-base'>{datas[0].desc}
                    </div>
                    <button type="button" className="w-[150px] py-2.5 px-8 me-2 mb-2 mt-10 text-sm font-medium bg-[#EF4136] text-[#FFF] rounded-[4px]">Join US</button>
                </div>
            </div>
            <div className="w-[49%] ">
                {/* {datas.map((data)=>{
                    return(
                        <div className=' bg-slate-400 flex justify-center items-center' key={data.id}>
                            <img src={data?.image} alt={data?.name} className='pt-4' />
                        </div>
                    )
                })} */}
                <div className=' flex justify-center items-center' key={datas[0].id}>
                    <img src={datas[0]?.image} alt={datas[0]?.name} className='pt-10 w-[
418.29px]] h-[
452.29px]' />
                </div>
            </div>
        </div>
    )
}

export default ExpertiseAnimationCard 