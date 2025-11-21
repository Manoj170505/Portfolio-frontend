import React from "react";
import "./StylesCSS/Home.css";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="root bg-gradient-to-tr from-[#071C39]/1000 to-black h-screen flex flex-col justify-between items-center">
      <nav className="flex flex-row w-full justify-between items-center p-5">
        <div>
          <h2>LOGO</h2>
        </div>
        <div>
          <ul className="relative flex flex-row gap-4 text-neutral-300 text-2xl bg-neutral-400/20 py-3 px-1 rounded-full backdrop-blur-[1px] border border-neutral-400/20 shadow-lg overflow-hidden">
            
            <div 
              className="absolute top-0 left-0 h-full bg-white/80 backdrop-blur-[1px] rounded-full transition-transform duration-300 ease-in-out shadow-md"
              style={{ 
                width: 'calc(100% / 5)',
                transform: `translateX(${activeIndex * 100}%)` 
              }}
            ></div>
            
            {[
              "bi-house",
              "bi-info-circle",
              "bi-mortarboard",
              "bi-archive",
              "bi-envelope",
            ].map((icon, i) => (
              <li key={icon} className="relative z-10 flex-1 flex justify-center">
                <i
                  onClick={() => handleItemClick(i)}
                  className={`bi ${icon} p-2 px-7 rounded-full cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 ${
                    activeIndex === i 
                      ? 'text-black scale-105' 
                      : 'hover:shadow-sm'
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex flex-row justify-between items-center w-full flex-1 px-10">
        <div className="flex flex-col w-full justify-start items-start gap-5">
          <h1 className="text-8xl font-bold text-white">I'M MANOJ,</h1>
<h3 className="text-4xl text-neutral-300">
  WEB
  <TypeAnimation
    sequence={[
      " DESIGNER", // Types " DESIGNER" after "WEB"
      4000, // Pause after typing "WEB DESIGNER"
      "", // Deletes " DESIGNER" (backspaces the last typed string)
      " DEVELOPER", // Types " DEVELOPER" after "WEB"
      4000, // Pause after typing "WEB DEVELOPER"
      "", // Deletes " DEVELOPER"
    ]}
    wrapper="span"
    speed={160}
    repeat={Infinity} // Loops infinitely; change to 0 for one-time playback
    cursor={false}
  />
</h3>
          <button className="bg-neutral-100 rounded-full py-3 px-5 text-black text-xl hover:bg-neutral-200 transition-colors duration-200">
            DOWNLOAD CV
          </button>
        </div>
        <div className="rounded-full bg-neutral-100 w-200 h-130 mr-20"></div>
      </div>

      <div className="flex flex-row justify-between items-center mb-10 gap-5 w-full px-10">
        <ul className="flex flex-row gap-8 text-3xl text-neutral-300">
          <li className="hover:text-white transition-colors duration-200 cursor-pointer">
            <i className="bi bi-instagram"></i>
          </li>
          <li className="hover:text-white transition-colors duration-200 cursor-pointer">
            <i className="bi bi-linkedin"></i>
          </li>
          <li className="hover:text-white transition-colors duration-200 cursor-pointer">
            <i className="bi bi-github"></i>
          </li>
          <li className="hover:text-white transition-colors duration-200 cursor-pointer">
            <i className="bi bi-pinterest"></i>
          </li>
        </ul>
        <h6 className="w-2/4 text-neutral-300 text-lg leading-relaxed">
          Designing and developing sleek, responsive websites that bring ideas
          to life. Turning your vision into a smooth and modern digital
          experience.
        </h6>
      </div>
    </div>
  );
};

export default Home;
