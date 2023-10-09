import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import './sidebar.css';

const Sidebar = () => {
  return (
    <Col md={2} className="cutom-blue sidebar custom-height">
      <Nav className="flex-column">
        <p className="h5 text-white p-2">User Management</p>
        <Nav.Link href="#" className="text-white">
          Users
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          Add Users
        </Nav.Link>
      </Nav>
    </Col>
  );
};

export default Sidebar;
