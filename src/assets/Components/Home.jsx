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
    <div id='home' ref={containerRef} className='relative flex flex-col h-screen bg-none justify-center items-center'>
      <div className="absolute inset-0 z-0 h-screen overflow-hidden">
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
          className="custom-rays"
        />
      </div>
      <div className="home-content contents flex flex-col justify-center items-center z-10 relative">
        <h2>Hi There,</h2>
        <h1>I'm <span>MANOJ</span></h1>
        <h5>FULL-STACK DEVELOPER</h5>
        <p>"Always Strive To Be Better."</p>
        <div>
          <button className='left-btn' onClick={() => window.location.href = '#projects'}>View My Projects</button>
          <button className='right-btn'>Download CV</button>
        </div>
        <div>
          <ul className='social-icons flex gap-8'>
            <li><i className="bi bi-instagram"></i></li>
            <li><i className="bi bi-github"></i></li>
            <li><i className="bi bi-pinterest"></i></li>
            <li><i className="bi bi-linkedin"></i></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
