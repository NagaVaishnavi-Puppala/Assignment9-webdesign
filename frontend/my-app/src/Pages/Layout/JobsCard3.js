import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";

const JobsCard3 = ({data}) => {
  
  return (
    <Container>
      <Row>
        {data.map((dataMain, k) => (
          <Col key={k} xs={12} md={4} lg={4}>
            <Card >
              <Card.Img src={dataMain.img} />
              <Card.Body>
                <Card.Title>{dataMain.name}</Card.Title>
                <Card.Text>{dataMain.designation}</Card.Text>
                <Card.Text>{dataMain.domain}</Card.Text>
                <button type="button" class="btn btn-outline-secondary ">Apply</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default JobsCard3;