// Irán nuestras rutas.

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import MyJob from "../pages/MyJob";
import Profile from "../pages/Profile";
import {useTheme} from '../theme/ThemeContext'

const RoutesTheme = () => {
  const { theme } = useTheme();
  
  return (
   
    <Router>
      <section  className={`App ${theme}`} >
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/MyJob">My Job</Link>
          </li>
          <li>
            <Link to="/Profile"> Profile</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyJob" element={<MyJob />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      </section>
    </Router>
   
  );
};

export default RoutesTheme;
