import React from "react";
import SalesHeader from "./SalesHeader";
import Hero from "./Hero";
import VideoPlayer from "./VideoPlayer";
import HeadsetFeature from "./HeadsetFeature";
import ContactForm from "./ContactForm";


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black p-2">
      <SalesHeader />
      <Hero />
      <VideoPlayer />
      <HeadsetFeature />
      <ContactForm />

    </div>
  );
};

export default Home;
