import React, { useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const App = () => {

  const [index, setIndex] = useState(0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <NavbarComponent />
      <Header />
      <Services />
      <div className="text-center my-4">
        <Button
          onClick={() => {
            setIndex(index + 1);
          }}
          variant="primary"
        >
          Increament by 1
        </Button>
        <Button
          onClick={() => {
            if(index > 1){
              setIndex(index - 1);
            }
          }}
          variant="primary"
        >
          Decreament by 1
        </Button>
        <div>{index}</div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
