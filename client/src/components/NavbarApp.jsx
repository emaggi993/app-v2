import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/logo2.png';
import Searchbar from './Searchbar';
function NavbarApp() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Catálogo
            
          </Navbar.Brand>
          
        </Container>
        Catalogo
      </Navbar>
  );
}

export default NavbarApp;
