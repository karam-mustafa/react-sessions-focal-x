import Carousel from "react-bootstrap/Carousel";

export default function Header(props) {
  return (
    <Carousel>
      {props.items.map((item) => {
        return (
          <Carousel.Item
            className="w-100"
            style={{
              height: "100vh",
            }}
            key={item.id}
          >
            <img
              className="w-100"
              style={{
                height: "100vh",
              }}
              src={item.image}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
