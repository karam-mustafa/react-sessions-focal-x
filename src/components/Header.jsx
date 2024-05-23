import Carousel from "react-bootstrap/Carousel";

export default function Header() {
  return (
    <Carousel>
      <Carousel.Item
        className="w-100"
        style={{
          height: "100vh",
        }}
      >
        <img
          className="w-100"
          style={{
            height: "100vh",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGE1H-nI97uYBMtjrJDxoPTpcC92EiP_MC8c38gV_Je7E1GaZIp2SjbZQTCPXMnEDI4k&usqp=CAU"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        className="w-100"
        style={{
          height: "100vh",
        }}
      >
        <img
          className="w-100"
          style={{
            height: "100vh",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGE1H-nI97uYBMtjrJDxoPTpcC92EiP_MC8c38gV_Je7E1GaZIp2SjbZQTCPXMnEDI4k&usqp=CAU"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        className="w-100"
        style={{
          height: "100vh",
        }}
      >
        <img
          className="w-100"
          style={{
            height: "100vh",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGE1H-nI97uYBMtjrJDxoPTpcC92EiP_MC8c38gV_Je7E1GaZIp2SjbZQTCPXMnEDI4k&usqp=CAU"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
