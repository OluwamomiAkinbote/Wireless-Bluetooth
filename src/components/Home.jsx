import React from "react";
import SalesHeader from "./SalesHeader";
import Hero from "./Hero";
import VideoPlayer from "./VideoPlayer";
import HeadsetFeature from "./HeadsetFeature";
import ContactForm from "./ContactForm";
import Packages from "./Packages";
import Discover from "./Discover";


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black p-2 font-roboto">
      <SalesHeader />
      <Hero />
      <VideoPlayer />
      <HeadsetFeature />
      <Discover />
      <Packages />
      <ContactForm />

    </div>
  );
};

export default Home;
