import React from "react";
import "./StylesCSS/Home.css";
import FaultyTerminal from './StylesCSS/FaultyTerminal';
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  // Navigation icons array
  const navIcons = [
    "Home",
    "About",
    "Education",
    "Projects",
    "Contact",
  ];

  // Function to get opacity class based on distance from activeIndex
  const getOpacityClass = (index) => {
    const distance = Math.abs(index - activeIndex);
    if (distance === 0) return "opacity-100 text-white";
    if (distance === 1) return "opacity-75 text-neutral-300";
    if (distance === 2) return "opacity-25 text-neutral-300";
    return "opacity-10 text-neutral-300"; // For any farther, but since max 2, this is for safety
  };

  // Social media items for the icon list
  const socialItems = [
    { iconClass: "bi bi-github", color: "#ffffff", url: "https://github.com/Manoj170505" },
    { iconClass: "bi bi-linkedin", color: "#0077B5", url: "https://www.linkedin.com/in/manoj-m-6a7a81330/" },
    { iconClass: "bi bi-instagram", color: "#E4405F", url: "https://www.instagram.com/_detox_.12/" },
    { iconClass: "bi bi-pinterest", color: "#E60023", url: "https://pin.it/50Iwobm8B" }
  ];

  return (
    <div className="root h-screen flex flex-col justify-between items-center relative">
      {/* Background FaultyTerminal - Positioned as full-screen background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <FaultyTerminal
          scale={3}
          gridMul={[2, 1]}
          digitSize={2.6}
          timeScale={1.9}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.09}
          tint="#3b5278"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={0.5}
        />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 flex flex-row w-full justify-between items-center p-3 md:p-5">
        <div className="hidden md:block">
          <h2 className="text-lg md:text-xl">LOGO</h2>
        </div>
        <div>
          <ul className="relative flex flex-row md:gap-4 text-neutral-300 text-sm md:text-xl py-0.5 md:py-2 px-0.5 rounded-full backdrop-blur-[1px] overflow-hidden">
            {/* Active indicator */}
            <div
              className="absolute top-0 left-0 h-full transition-transform duration-300 ease-in-out shadow-md"
              style={{
                width: 'calc(100% / 5)',
                transform: `translateX(${activeIndex * 100}%)`,
              }}
            ></div>

            {/* Navigation items */}
            {navIcons.map((icon, i) => (
              <li key={icon} className="relative z-10 flex-1 flex justify-center">
                <p
                  onClick={() => handleItemClick(i)}
                  className={`p-0.5 md:p-2 px-2 md:px-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 ${getOpacityClass(i)} ${
                    activeIndex === i
                      ? 'scale-105'
                      : 'hover:shadow-sm'
                  }`}
                >
                  {icon}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center md:flex-row justify-between items-center w-full flex-1 px-5 md:px-10">
        {/* Social Media Icons - Desktop Left */}
        <div className="hidden md:flex flex-col justify-center items-center gap-5 md:gap-10">
          <ul className="flex flex-col justify-center items-center gap-6 md:gap-8">
            {socialItems.map((item, index) => (
              <li key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <i className={`${item.iconClass} text-3xl md:text-4xl hover:scale-110 transition-transform`} style={{ color: item.color }}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Center Content */}
        <div className="flex flex-col w-full justify-center items-center gap-3 md:gap-5">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">I'M MANOJ,</h1>
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-neutral-300">
            WEB
            <TypeAnimation
              sequence={[
                " DESIGNER",
                4000,
                "",
                " DEVELOPER",
                4000,
                "",
              ]}
              wrapper="span"
              speed={160}
              repeat={Infinity}
              cursor={false}
            />
          </h3>
          <button className="bg-neutral-100 rounded-full py-2 md:py-3 px-4 md:px-5 text-black text-lg md:text-xl hover:bg-neutral-200 transition-colors duration-200">
            DOWNLOAD CV
          </button>
          {/* Social Media Icons - Mobile Below Button */}
          <div className="md:hidden flex flex-row gap-4 mt-4">
            {socialItems.map((item, index) => (
              <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                <i className={`${item.iconClass} text-2xl hover:scale-110 transition-transform`} style={{ color: item.color }}></i>
              </a>
            ))}
          </div>
        </div>
        {/* Scroll Down - Desktop Right */}
        <div className="hidden md:flex flex-col justify-center items-center gap-2">
          <span className="text-lg md:text-xl text-neutral-300 transform -rotate-90 whitespace-nowrap"><i className="bi bi-chevron-left text-neutral-300 p-2 text-xl md:text-2xl"></i>SCROLL DOWN</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center mb-5 md:mb-10 gap-3 md:gap-5 w-full px-5 md:px-10">
        <h6 className="w-full text-neutral-300 text-sm md:text-sm leading-relaxed mt-3 md:mt-0">
          <span className="text-red-600">^ </span>Designing and developing sleek, responsive websites that bring ideas
          to life. Turning your vision into a smooth and modern digital
          experience.
        </h6>
      </div>
    </div>
  );
};

export default Home;
