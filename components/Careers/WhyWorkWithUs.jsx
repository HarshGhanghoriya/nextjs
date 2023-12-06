import React from 'react'
import Slider from "react-slick";

const WhyWorkWithUs = () => {
  const data = [
    {
      id: 1,
      image: "./images/Union1.svg",
      name: "Innovate and Excel",
      desc: "Be at the forefront of technological advancements, shaping the future of distribution and manufacturing. Learn and grow in a traditional sector by approaching it in non-traditional ways.",
      icon: "01"
    },
    {
      id: 2,
      image: "./images/Union2.svg",
      name: "Out-of-the-Box Ideology",
      desc: "The curious mindset of all Elchemists drives and nurtures a culture of new ideas and innovative solutions across all our functions. If you believe there is always a better way, we're here to help you carve the path, and you belong here.",
      icon: "02"
    },
    {
      id: 3,
      image: "./images/Union3.svg",
      name: "Diverse Responsibilities",
      desc: "If you enjoy wearing multiple hats, embrace continuous learning, and aspire to holistic growth, you'll thrive here. We cherish the entrepreneurial spirit that is at the core of every Elchemist.",
      icon: "03"
    },
    {
      id: 4,
      image: "./images/Union4.svg",
      name: "High Ownership",
      desc: "At Elchemy, we believe that leadership potential exists within everyone. With our flat hierarchy and open-door policy, you can discover the leader within you and find your perfect place in our organization",
      icon: "04"
    },
  ]

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
    {/* <Slider {...settings}> */}
      {data.map((item, index) => {
        return (
          <div className='flex justify-between my-6 p-10 relative ' key={item.id}>
            <div className='w-[49%]'>
              <div className="flex flex-col w-[70%] relative pl-4">
                <div className="h-[80px] w-[40px] whatWeDoBar bg-[#F15B2A] absolute -left-7 -top-6"></div>
                <h2 className='text-4xl mb-2'>Why Work With Us: A Culture of Possibilities</h2>

                <h3 className='text-3xl mb-1 pt-10'>{item.name}</h3>
                <div className='pt-2 pb-5 text-lg'>{item.desc}
                </div>
                <button type="button" className="w-[150px] py-2.5 px-8 me-2 mb-2 mt-10 text-sm font-medium bg-[#EF4136] text-[#FFF] rounded-[4px]">Join US</button>
              </div>
            </div>
            {/* <Slider {...settings}> */}
            <div className="flex items-center justify-center absolute -bottom-[100px]  left-[40%] text-[200px] text-pink font-semibold opacity-[0.1] ">{item.icon}</div>
            {/* </Slider> */}
            <div className='w-[49%] flex items-center justify-center relative'>
              <img src={item.image} alt="image-1" className='w-[350px] h-[800px] absolute' />
            </div>
          </div>
        )
      })}
      {/* </Slider> */}
    </>
  )
}

export default WhyWorkWithUs