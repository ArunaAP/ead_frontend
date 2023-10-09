import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Container style={{ maxWidth: '50%', paddingTop: '150px' }}>
      <Card className="d-flex flex-row align-items-center">
        <Card.Img
          variant="top"
          src="/Rectangle 5.svg"
          style={{ maxWidth: '50%', height: 'auto' }}
          className="flex-fill"
        />

        <div className="w-50">
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <Card.Title className="h1 text-center font-weight-bold">
              Login
            </Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" style={{ width: '100%' }}>
                Login
              </Button>
            </Form>
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
}

export default BasicExample;
