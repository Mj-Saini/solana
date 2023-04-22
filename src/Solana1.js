import React from "react";
import Hero from "./components/Hero";
import Connect from "./components/Connect";
import Community from "./components/Community";
import Growth from "./components/Growth";
import SlideShow from "./components/SlideShow";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function Solana1() {
  return (
    <>
      <div className="overflow-hidden">
        <Loader />
        <Hero />
        <Connect />
        <Community />
        <Growth />
        <SlideShow />
        <Footer />
      </div>
    </>
  );
}

export default Solana1;
