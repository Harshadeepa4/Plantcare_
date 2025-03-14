import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar'; // Assuming you have a Navbar component
import HeroSection from './Components/HeroSection';


import Pricing from './Components/Service.jsx';

import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import UserProfile from './Components/UserProfile'; // Your multi-step form
import Services from './Components/Services';
import Notifications from './Components/Notifications';
import ImageAnalysis from './Components/ImageAnalysis';
import TextAnalysis from './Components/TextAnalysis';
import MarketInsights from './Components/MarketInsights';
import ProfileDisplay from './Components/ProfileDisplay.jsx'; // Make sure the extension matches

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-7xl mx-auto pt-20 px-6">
              <HeroSection />
              
              
              <Pricing />

              <Footer />
            </div>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        {/* Route for the multi-step form */}
        <Route path="/profile" element={<UserProfile />} />
        {/* Route for the profile display page (dynamic ID) */}
        <Route path="/profile/:id" element={<ProfileDisplay />} />
        <Route path="/services" element={<Services />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/image-analysis" element={<ImageAnalysis />} />
        <Route path="/text-analysis" element={<TextAnalysis />} />
        <Route path="/market-insights" element={<MarketInsights />} />
      </Routes>
    </BrowserRouter>
  );
}