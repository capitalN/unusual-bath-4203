import BottomLinks from "./components/BottomLinks";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React from "react";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
      <BottomLinks/>
    </>
  );
}
