import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../../index.css';

function Dashboard() {
  const cardStyle = {
    minHeight: '240px', // Adjust the height as needed
  };

  return (
    <Container>
      <h3 className="h4 text-center pt-5 pb-5">Good Morning .!</h3>
      <Row className="pt-5">
        <Col md={3}>
          <Card style={cardStyle}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="text-center">User Management</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={cardStyle}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="text-center">
                Traveler Management
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={cardStyle}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="text-center">
                Ticket Booking Management
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={cardStyle}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="text-center">Train Management</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
