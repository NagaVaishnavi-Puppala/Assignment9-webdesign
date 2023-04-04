import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";

const AboutCard1 = ({data}) => {
  
  return (
    <Container>
      <Row>
        {data.map((dataMain, k) => (
          <Col key={k} xs={12} md={4} lg={3}>
            <Card >
              <Card.Img src={dataMain.img} />
              <Card.Body>
                <Card.Title>{dataMain.name}</Card.Title>
                <Card.Text>{dataMain.designation}</Card.Text>
                <Card.Text>{dataMain.quotes}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AboutCard1;