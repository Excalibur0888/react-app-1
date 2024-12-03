import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import StickyLinks from './components/StickyLinks/StickyLinks';
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About";
import AuthPage from "./Pages/Auth/AuthPage";
import Help from "./Pages/Help/Help";
import Gallery from "./Pages/Gallery/Gallery";
import Reviews from "./Pages/Reviews/Reviews";
import Profile from "./Pages/Profile/Profile";
import "./App.css";
import MouseUp from "./components/MouseUP/MouseUP";

function App() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursor && follower) {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;

        setTimeout(() => {
          follower.style.left = `${clientX}px`;
          follower.style.top = `${clientY}px`;
        }, 50);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div>
      <div ref={followerRef} className="cursor-follower"></div>
      <div ref={cursorRef} className="cursor"></div>
      <StickyLinks />
      <MouseUp />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/auth/:authType" element={<AuthPage />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
