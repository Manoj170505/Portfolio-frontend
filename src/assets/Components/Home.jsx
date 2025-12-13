import React, { useEffect, useRef } from 'react'
import "../CSSFiles/Home.css"
import LightRays from '../Elements/LightRays'
import { gsap } from 'gsap'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(".home-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      })

      tl.from(".social-icons li", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.5")

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div id='home' ref={containerRef} className='relative flex flex-col h-screen overflow-hidden justify-center items-center'>
      <div className="absolute inset-0 z-0 h-screen w-full">
         {/* LightRays might need adjustment for light mode visibility, keeping as is for now or making conditional via CSS if possible, but JS prop update requires re-render. 
             Assuming LightRays looks okay or acceptable on light mode for now. */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#0c8cf5"
          raysSpeed={1.5}
          lightSpread={1}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays opacity-50 dark:opacity-100 transition-opacity duration-300"
        />
      </div>
      <div className="home-content contents flex flex-col justify-center items-center z-10 relative px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black dark:text-white transition-colors">Hi There,</h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight my-2 text-black dark:text-white transition-colors">
            I'm <span className="bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6] bg-clip-text text-transparent">MANOJ</span>
        </h1>
        <h5 className="text-xl md:text-2xl font-semibold tracking-[3px] mt-4 relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#0c8cf5] after:to-[#8b5cf6] after:scale-x-0 after:animate-[underline_1s_ease-in-out_forwards] text-gray-700 dark:text-gray-200 transition-colors">FULL-STACK DEVELOPER</h5>
        <p className="text-lg md:text-xl italic opacity-80 my-6 text-gray-600 dark:text-gray-300 transition-colors">"Always Strive To Be Better."</p>
        <div className="flex flex-col sm:flex-row gap-5 mt-5 w-full sm:w-auto px-6">
          <button 
                className='px-8 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6] text-white hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(12,140,245,0.6)] transition-all duration-300 border-none outline-none' 
                onClick={() => window.location.href = '#projects'}
            >
                View My Projects
            </button>
          <button 
                className='px-8 py-3 rounded-full text-lg font-semibold bg-transparent text-black dark:text-white border-2 border-gray-800 dark:border-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_10px_white] transition-all duration-300 outline-none'
            >
                Download CV
            </button>
        </div>
        <div className="mt-8">
          <ul className='social-icons flex gap-8'>
            <li><i className="bi bi-instagram text-3xl text-black dark:text-white hover:text-[#f50c9c] dark:hover:text-[#f50c9c] hover:drop-shadow-[0_0_10px_#f50c9c] transition-all duration-300 cursor-pointer"></i></li>
            <li><i className="bi bi-github text-3xl text-black dark:text-white hover:text-black dark:hover:text-white hover:drop-shadow-[0_0_10px_black] dark:hover:drop-shadow-[0_0_10px_white] transition-all duration-300 cursor-pointer"></i></li>
            <li><i className="bi bi-pinterest text-3xl text-black dark:text-white hover:text-[#f50c0c] dark:hover:text-[#f50c0c] hover:drop-shadow-[0_0_10px_#f50c0c] transition-all duration-300 cursor-pointer"></i></li>
            <li><i className="bi bi-linkedin text-3xl text-black dark:text-white hover:text-[#0c69f5] dark:hover:text-[#0c69f5] hover:drop-shadow-[0_0_10px_#0c69f5] transition-all duration-300 cursor-pointer"></i></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
