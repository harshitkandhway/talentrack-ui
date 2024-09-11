import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Location from '../pages/Location';
import About from '../pages/About';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import "./styles/GlobalNavigationBar.css";

function GlobalNavigationBar() {
    return (
        <Router>
            <div>
                <header className="header">
                    <Link to="/">Home</Link>
                    <Link to="/services" className="dropbtn">Services</Link>
                    <Link to="/location">Location</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default GlobalNavigationBar;
