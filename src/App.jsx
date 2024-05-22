import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";


const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <Header />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
