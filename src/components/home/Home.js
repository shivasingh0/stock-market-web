import React from "react";
import "./Home.css";
import Navbar from "../navBar/Navbar";
import UpperSection from "../upperSection/UpperSection";
import Services from "../services/Services";
import Pricing from "../pricing/Pricing";
import About from "../about/About";
import ContactSection from "../contactSection/ContactSection";
import Footer from "../footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <UpperSection />
      <Services />
      <Pricing />
      <About />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
