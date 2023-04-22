import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Solana1 from "./Solana1";
import Solana2 from "./Solana2";
import BackTop from "./components/BackTop";
import Loader from "./components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <Loader />
      <BackTop />
      <Routes>
        <Route path="/" element={<Solana1 />} />
        <Route path="next" element={<Solana2 />} />
      </Routes>
    </>
  );
}

export default App;
