import React from 'react'

const WorkingWithUs = () => {
    return (
        <div className='flex flex-col items-center bg-[#EF4136] mb-10 md:mb-[8rem] md:rounded-[4px] md:pt-[1.2rem]'>
            <div className='px-5 py-8 md:px-[5.5rem] flex flex-col md:flex-row items-center w-full'>
                <div className='mb-4 md:mb-0  text-left '>
                    <h5 className='text-white text-xs md:text-[13px] md:pb-2 md:font-medium font-mukta'>Join Elchemy</h5>
                    <div className='w-[7rem] h-[0.5px] bg-white mt-1 mb-4'></div>
                    <h2 className='text-white text-[28px] md:text-[32px] md:pb-2 font-Mukta'>Work With Us!</h2>
                    <h4 className='text-[#FFF] text-[13px] font-sans md:mb-1 md:mukta md:w-[30rem] md:text-left md:font-[100]'>
                    Lorem ipsum dolor sit amet consectetur. Pellentesque lectus mattis
                    </h4>
                    <h4 className='text-[#FFF] text-[13px] font-sans md:mb-5 md:mukta md:w-[30rem] md:text-left md:font-thin!'>
                      Rhoncus facilisis id laoreet pellentesque ac at.
                    </h4>

                </div>
                <div className='w-full  text-left md:text-right'>
                    <button type="button" className="  py-3 px-10 md:px-[48px] text-pink bg-white rounded-[4px] mt-4 md:mt-0 md:ml-auto md:font-mukta md:font-semibold">
                        Join Us
                    </button>
                </div>
            </div>
        </div>

    )
}

export default WorkingWithUs
