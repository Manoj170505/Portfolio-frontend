import { useState } from 'react';
import '../CSSFiles/Home/Navbar.css';
import { Icon } from "@iconify/react";
import { TypeAnimation } from 'react-type-animation';
import '../CSSFiles/Home/Font.css'
import DarkVeil from '../CSSFiles/Home/DarkVeil'

function Home() {
  const [activeNav, setActiveNav] = useState('home');  // Default to 'home'

  const navItems = [
    { id: 'home', icon: 'ic:round-home' },
    { id: 'about', icon: 'material-symbols:person-rounded' },
    { id: 'education', icon: 'mdi:book-education' },
    { id: 'folder', icon: 'ic:baseline-work' },
    { id: 'mail', icon: 'mynaui:send-solid' },
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
    <div className='bg-gray-950 flex flex-col md:flex-row h-screen justify-center md:justify-end items-center md:items-center relative'>
      {/* Text Content Section */}
      <div className="flex flex-col items-center md:items-start mr-auto md:ml-10 w-full md:w-1/2 z-10 text-white space-y-4 md:space-y-6 px-4 md:px-0">
        <h2 className='greet text-4xl md:text-6xl font-medium text-center md:text-left text-gray-200'>HI THERE !</h2>
        <h1 className='name text-6xl md:text-9xl text-center md:text-left'>I'M <span className='text-cyan-400 font-bold'>MANOJ</span></h1>
        <h4 className='fld text-xl md:text-3xl bg-transparent text-gray-100 border-b-4 border-cyan-400 font-regular text-center md:text-left'>WEB DESIGNER / DEVELOPER</h4>
        <p className='qot text-lg md:text-2xl w-full md:w-130 h-auto md:h-30 mt-4 md:mt-6 text-center md:text-justify text-gray-300'>
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
          <button className='p-3 md:p-5 bg-cyan-500 text-gray-950 text-lg md:text-2xl font-semibold rounded-full transition duration-300 ease-in-out hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 w-full md:w-auto'>Download CV</button>
          <button className='bg-transparent border-2 border-cyan-400 text-cyan-400 text-lg md:text-2xl font-semibold p-3 md:p-5 rounded-full transition duration-300 ease-in-out hover:bg-cyan-400 hover:text-gray-950 hover:shadow-lg hover:shadow-cyan-500/50 w-full md:w-auto'>See Projects</button>
        </div>
      </div>
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, right: 0, zIndex: 1 }} className='md:w-1/2 md:relative md:h-screen'>
        <DarkVeil />
      </div>
    </div>
  );
}

export default Home;
