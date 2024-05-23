import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Services() {
  const services = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Service 1",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/160",
      title: "Service 2",
      buttonVariant: "primary",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/170",
      title: "Service 3",
      buttonVariant: "success",
    },
  ];

  return (
    <Container>
      <Row className="my-5">
        {services.map((service) => {
          return (
            <Col key={service.id} className="my-5" lg="4" md="6" sm="12">
              <Card>
                <FontAwesomeIcon icon={faFacebook} />
                <Card.Img variant="top" src="images/focal-x.jpg" />
                {/* <Card.Img variant="top" src="src/assets/images/focal-x.jpg" /> */}
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Button variant={service.buttonVariant}>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
