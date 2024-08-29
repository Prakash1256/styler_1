import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import TrendSection from './components/TrendSection';
import CategorySection from './components/CategorySection';
import AboutSection from './components/AboutSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import ServicesPage from './components/ServicesPage'; // Import your ServicesPage component
import SignupLoginPage from './components/SignupLoginPage'; // Import your SignupLoginPage component
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    AOS.init();
    window.addEventListener("load", () => {
      document.body.classList.add("loaded");
    });

    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    if (email && token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Header isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/" element={<><Carousel /><TrendSection /><CategorySection /><AboutSection /><PartnerSection /><Footer /> <AdminLogin /></>} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/login-signup" element={<SignupLoginPage />} />
          {/* <Route path="/myProfile" element={<MyProfile />} /> Add this component if needed */}
        </Routes>
        <p className="last-para">© 2023, Styler Salon. All rights reserved.</p>
      </div>
    </Router>
  );
};

export default App;
