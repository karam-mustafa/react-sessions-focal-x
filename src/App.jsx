import React, { useState, useEffect } from "react";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const items = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGE1H-nI97uYBMtjrJDxoPTpcC92EiP_MC8c38gV_Je7E1GaZIp2SjbZQTCPXMnEDI4k&usqp=CAU",
    title: "title 1",
    description: "description 1",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGE1H-nI97uYBMtjrJDxoPTpcC92EiP_MC8c38gV_Je7E1GaZIp2SjbZQTCPXMnEDI4k&usqp=CAU",
    title: "title 2",
    description: "description 2",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGE1H-nI97uYBMtjrJDxoPTpcC92EiP_MC8c38gV_Je7E1GaZIp2SjbZQTCPXMnEDI4k&usqp=CAU",
    title: "title 3",
    description: "description 3",
  },
];


const App = () => {
  
  const [services, setServices] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => res.json())
      .then((res) => {
        setServices(res);
      });
  }, []);

  useEffect(() => {
    if (services.length) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    } else {
      setLoading(true);
    }
  }, [services]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <NavbarComponent />
      <Header items={items} />
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} />
      ) : (
        <Services services={services} />
      )}
      <Footer />
    </div>
  );
};

export default App;
