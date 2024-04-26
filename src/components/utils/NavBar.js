import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";



function NavBar() {



  return (
    <Navbar  
    collapseOnSelect
    expand="lg"
    className="NavBar"
    data-bs-theme="light"
    >
      <Container>
        <Navbar.Toggle className="to" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="responsive-navbar-nav"
        >
          <Nav className="navbar" style={{color:'#fff'}}>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Experiences">Experiences</Nav.Link>
            <Navbar.Brand href="#home" className="brandImg">
              <img src="sources/svgIcon/main logo w.svg" alt="Brand img"></img>
            </Navbar.Brand>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#Connect">Connect Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
