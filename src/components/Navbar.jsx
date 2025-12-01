import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";

const Nabvar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
          <Nav className="me-auto">
            <Button className="nav_button" variant="outline-light" style={{marginRight: '5px'}}>🍕 Home</Button>
            <Button className="nav_button" variant="outline-light" style={{marginRight: '5px'}}>🔓 Profile</Button>
            <Button className="nav_button" variant="outline-light" style={{marginRight: '5px'}}>🔒 Logout</Button>
            <Button className="nav_button" variant="outline-light" style={{marginRight: '5px'}}>🔐 Login</Button>
            <Button className="nav_button" variant="outline-light">🔐 Register</Button>
          </Nav>
          <Button className="nav_button" variant="outline-info">🛒 Total: $25.000</Button>
        </Container>
      </Navbar>
    </>
  )
}

export default Nabvar