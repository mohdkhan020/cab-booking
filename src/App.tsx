import React from "react";
import Navbar from "./views/Navbar/Navbar";
import HeroSlider from "./views/HeroSlider/HeroSlider";
import Footer from "./views/Footer/Footer";
import SignUp from "./views/SignUpForm/SignUp";
import CabDetails from "./views/CabDetails/CabDetails";
import "./index.css";
import ContactUs from "./views/ContactUs/Contactus";
import Payment from "./views/Payment/Payment";
import AboutUs from "./views/AboutUs/AboutUs";
import Tour from "./views/Tour/Tour";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSlider />} />
          {/* <Route path="/cab-details" element={<CabDetails />} /> */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
       {/* <SignUp /> */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
