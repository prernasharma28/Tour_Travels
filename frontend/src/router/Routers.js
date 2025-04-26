import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import About from "./../pages/About";
import ContactUs from "./../pages/Contact";
import Thankyou from '../pages/Thankyou';
import Admin from './../pages/Admin';
import Setting from './../pages/Setting';
import SubscriptionPage from '../components/Subscription/SubscriptionPage'; 
import GalleryPage from './../components/Image-gallery/MasonaryImagesGallery'; 
import QRPage from '../pages/QRPage';
import DiningPage from './../components/Dining/DiningPage';
import EventPage from './../components/Events/EventPage';
import Destinations from './../components/Destinations/wedding';
import GenerateAI from "./../pages/GenerateAI";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path='/thank-you'  element={<Thankyou />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/admin" element={<Admin />} />  
      <Route path="/subscribe" element={<SubscriptionPage />} />
      <Route path="/setting" element={<Setting />} /> 
      <Route path="/subscriptions" element={<SubscriptionPage />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/qrpage" element={<QRPage />} />
      <Route path="/dining" element={<DiningPage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/generate-ai" element={<GenerateAI />} /> 
    </Routes>
  );
};

export default Routers;
