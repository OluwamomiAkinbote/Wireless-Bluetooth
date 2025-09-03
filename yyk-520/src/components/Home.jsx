import React from "react";
import SalesHeader from "./SalesHeader";
import Hero from "./Hero";

import HeadsetFeature from "./HeadsetFeature";
import ContactForm from "./ContactForm";
import Packages from "./Packages";
import ImageBanner from "./ImageBanner";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Notice from "./Notice";


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black p-2 font-roboto">
      <SalesHeader />
      <Hero />
      <HeadsetFeature />
      <ImageBanner />
      <Testimonials />
      <Packages />
      <Notice />
      <ContactForm />
      <Footer />

    </div>
  );
};

export default Home;
