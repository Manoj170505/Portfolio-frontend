import { useState } from "react";
import "./App.css";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col min-h-screen w-screen">
        <Home />
        <About />
    </div>
  );
}

export default App;
