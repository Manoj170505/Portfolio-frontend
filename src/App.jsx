import { useState } from "react";
import "./App.css";
import Welcome from "./Components/Welcome.jsx";
import Home from "./Components/Home.jsx";
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col min-h-screen w-screen">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
