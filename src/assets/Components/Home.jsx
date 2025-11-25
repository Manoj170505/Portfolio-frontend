import { useState } from 'react';
import '../CSSFiles/Home/Navbar.css';
import { Icon } from "@iconify/react";
import { TypeAnimation } from 'react-type-animation';
import '../CSSFiles/Home/Font.css'
import Silk from '../CSSFiles/Home/Silk'

function Home() {
  const [activeNav, setActiveNav] = useState('home');  // Default to 'home'

  const navItems = [
    { id: 'home', icon: 'ic:round-home' },
    { id: 'about', icon: 'streamline-logos:about-me-logo-block' },
    { id: 'education', icon: 'mdi:book-education' },
    { id: 'folder', icon: 'bi:folder-fill' },
    { id: 'mail', icon: 'material-symbols:mail-rounded' },
  ];

  const quotes = [
    `" In the canvas of code and pixels, every web designer paints a masterpiece of user dreams.`,
    `" A great developer doesn't just write code they weave stories that connect users to the world.`,
    `" Bugs are just uninvited guests in your code party debug with grace, and the app will dance.`,
    `" Every pixel matters, every function counts build with purpose, and the web will remember you.`,
    `" In a world of endless screens, a web designer's touch turns ordinary into extraordinary.`,
    `" Code today, inspire tomorrow: the web is your playground, and the future is your canvas`,
  ];

  return (
    <div className='bg-white flex flex-col md:flex-row h-screen justify-center md:justify-end items-center md:items-center'>
      {/* Text Content Section */}
      <div className="flex flex-col items-center md:items-start mr-auto md:ml-10 w-full md:w-1/2 z-0 text-black space-y-4 md:space-y-6 px-4 md:px-0">
        <h2 className='greet text-4xl md:text-6xl font-medium text-center md:text-left'>HI THERE !</h2>
        <h1 className='name text-6xl md:text-9xl text-center md:text-left'>I'M <span className='text-[#0D47A1] font-bold'>MANOJ</span></h1>
        <h4 className='fld text-xl md:text-3xl bg-transparent text-black border-b-4 border-blue-700 font-regular text-center md:text-left'>WEB DESIGNER / DEVELOPER</h4>
        <p className='qot text-lg md:text-2xl w-full md:w-130 h-auto md:h-30 mt-4 md:mt-6 text-center md:text-justify'>
          <TypeAnimation
            sequence={[
              ...quotes.flatMap(quote => [quote, 5000]),
            ]}
            wrapper="span"
            speed={90}
            cursor={true}
            repeat={Infinity}
          />
        </p>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 items-center md:items-start">
          <button className='p-3 md:p-5 bg-[#1565c0] text-white text-lg md:text-2xl rounded-full transition duration-300 ease-in-out hover:bg-[#0D47A1] hover:shadow-xl w-full md:w-auto'>Download CV</button>
          <button className='bg-none border-1 border-[#0D47A1] text-lg md:text-2xl p-3 md:p-5 rounded-full transition duration-300 ease-in-out hover:bg-[#0D47A1] hover:text-white hover:shadow-xl w-full md:w-auto'>See Projects</button>
        </div>
      </div>
      
      {/* Silk Component Section */}
      <div className="h-64 md:h-screen w-full md:w-1/2 z-0 mt-8 md:mt-0">
        <Silk
          speed={5}
          scale={1}
          color="#0D47A1"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      
      {/* Navbar */}
      <nav className="fixed bottom-5 md:top-1/2 md:right-5 md:transform md:-translate-y-1/2 z-10">
        <ul className="navbar flex md:flex-col flex-row space-x-4 md:space-x-0 md:space-y-4 cursor-pointer">
          {navItems.map((item) => (
            <li key={item.id} onClick={() => setActiveNav(item.id)} className={activeNav === item.id ? 'active' : ''}>
              <div>
                <Icon icon={item.icon} className="w-8 h-8 md:w-9 md:h-9" />
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Home;
