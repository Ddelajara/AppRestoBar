import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function MenuNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
         <Navbar.Brand href="#home">
            <h3>
              <b style={{color: 'green'}}>Res</b>
              <b>to</b>
              <b style={{color: 'red'}}>Bar</b>
              @Santiago
            </h3>
         </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="About">Acerca de Nosotros</Nav.Link>
            <Nav.Link href="Menu">Reservas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}