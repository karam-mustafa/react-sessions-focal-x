import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

export default function Services(props) {
  return (
    <Container>
      <Row className="my-5">
        {props.services.map((service) => {
            return (
              <Col key={service.id} className="my-5" lg="4" md="6" sm="12">
                <Card>
                  <Card.Img variant="top" src={service.url} />
                  {/* <Card.Img variant="top" src="src/assets/images/focal-x.jpg" /> */}
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Button variant={service.buttonVariant || "primary"}>
                      <FontAwesomeIcon icon={faFacebook} /> Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}
