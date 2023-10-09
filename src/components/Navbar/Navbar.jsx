import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import './navbar.css';

function NavbarComponent() {
  return (
    <Navbar className="custom-navbar-bg shadow">
      <Container>
        <Navbar.Brand href="#home" className="font-weight-500 text-white">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-white">
            <a href="#login">John doe</a>
            <FontAwesomeIcon icon={faUserCircle} />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
