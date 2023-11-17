import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Activity from './pages/Activity/Activity';
import Contact from './pages/Contact/Contact';
import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Project from './pages/Project/Project';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
      <div className="main">
        <Footer />
      </div>
    </>
  );
}
