import { bgChange } from "@/redux/slices/Blogs"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"


const ScrollBg = () => {
  const ref = useRef(null)
  const dispatch = useDispatch()

  const handleScroll = event => {
    if (ref.current && window !== undefined) {
      let top = ref.current.getBoundingClientRect().top
      let scrollCondition = top <= window.scrollY
      dispatch(bgChange(scrollCondition))
    }
  }

  useEffect(() => {
    window !== undefined && window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="text-[1.1rem] relative font-mukta font-light md:py-[2.5rem] md:px-[6rem]" ref={ref}>
      <span className="w-[4px] h-[28px] bg-[#EF4136] inline-block"></span> n a
      world where change is the only constant, Elchemy emerges as a visionary
      force in the global chemical industry with a grand mission: to reshape the
      Industry's landscape and create a transformative future in chemical
      distribution and custom manufacturing with technology in the forefront.
      It's a journey into the heart of the chemical industry, one that promises
      to resonate through the ages as a transformative force, reshaping the way
      we look at chemicals and manufacturing
    </div>
  )
}

export default ScrollBg
