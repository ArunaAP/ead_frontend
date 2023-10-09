import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './addForm.css';

function MyForm() {
  return (
    <Form className="p-5">
      <Form.Group controlId="input1">
        <Form.Label>Input 1</Form.Label>
        <Form.Control
          className="custom-input mb-3"
          type="text"
          placeholder="Enter input 1"
        />
      </Form.Group>

      <Form.Group controlId="input2">
        <Form.Label>Input 2</Form.Label>
        <Form.Control
          className="custom-input mb-3"
          type="text"
          placeholder="Enter input 2"
        />
      </Form.Group>

      <Form.Group controlId="input3">
        <Form.Label>Input 3</Form.Label>
        <Form.Control
          className="custom-input mb-3"
          type="text"
          placeholder="Enter input 3"
        />
      </Form.Group>

      <Form.Group controlId="input4">
        <Form.Label>Input 4</Form.Label>
        <Form.Control
          className="custom-input mb-3"
          type="text"
          placeholder="Enter input 4"
        />
      </Form.Group>

      <Form.Group controlId="input5">
        <Form.Label>Input 5</Form.Label>
        <Form.Control
          className="custom-input mb-3"
          type="text"
          placeholder="Enter input 5"
        />
      </Form.Group>

      <Form.Group controlId="input6">
        <Form.Label>Input 6</Form.Label>
        <Form.Control
          className="custom-input mb-3"
          type="text"
          placeholder="Enter input 6"
        />
      </Form.Group>

      <div className="d-flex justify-content-end">
        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: '#00abe4' }}
        >
          ADD
        </Button>
      </div>
    </Form>
  );
}

export default MyForm;
