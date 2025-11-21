import React from "react";
import "./StylesCSS/Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-root">
      <div className="gradient" />
      <div className="content flex flex-row">
        <div className="welcome-container flex flex-col h-screen w-7/8 justify-center items-center">
          <h1>WELCOME TO MY PORTFOLIO</h1>
          <h4>
            Where design meets development to create seamless experiences.
          </h4>
        </div>
        <div className="icon flex flex-col justify-center w-1/8 items-center">
          <Link to="/home">
            <i className="bi bi-chevron-double-right text-5xl"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
