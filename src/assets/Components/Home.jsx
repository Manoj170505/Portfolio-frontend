import React from 'react'
import "../CSSFiles/Home.css"
import LightRays from '../Elements/LightRays'

const Home = () => {
  return (
    <div id='home' className='relative flex flex-col h-screen w-screen bg-none justify-center items-center'>
    <div className="absolute inset-0 z-0">
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
    <div className="contents flex flex-col justify-center items-center z-10 relative">
      <h2>Hi There,</h2>
      <h1>I'm <span>MANOJ</span></h1>
      <h5>FULL-STACK DEVELOPER</h5>
      <p>"Always Strive To Be Better."</p>
      <div>
        <button className='left-btn'>View My Projects</button>
        <button className='right-btn'>Download CV</button>
      </div>
      <div>
        <ul className='flex gap-8'>
          <li><i class="bi bi-instagram"></i></li>
          <li><i class="bi bi-github"></i></li>
          <li><i class="bi bi-pinterest"></i></li>
          <li><i class="bi bi-linkedin"></i></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Home
