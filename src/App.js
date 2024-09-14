import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import Help from "./Pages/Help/Help";
import Gallery from "./Pages/Gallery/Gallery";
import Services from "./Pages/Services/Services";
import Reviews from "./Pages/Reviews/Reviews";
import Profile from "./Pages/Profile/Profile";
import "./App.css";

function App() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // Функция обновления позиции курсора и фолловера
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (cursor && follower) {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;

        // Задержка для плавного движения фолловера
        setTimeout(() => {
          follower.style.left = `${clientX}px`;
          follower.style.top = `${clientY}px`;
        }, 50);
      }
    };

    // Добавляем событие движения мыши
    window.addEventListener("mousemove", moveCursor);

    // Очистка события при размонтировании компонента
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div>
      <div ref={followerRef} className="cursor-follower"></div>
      <div ref={cursorRef} className="cursor"></div>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
