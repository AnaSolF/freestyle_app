import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "@/styles/navBar.module.css";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { useMainContextProvider } from "@/Context/MainContextProvider";

function NavBar() {
  //Ejemplo: Uso las variables que traigo del contexto con el hook personalizado (useMainContextProvider())
  const { isVisible } = useMainContextProvider();
  const { mostrar } = useMainContextProvider();
  const router = useRouter();
  const handleClick = () => {
    mostrar();
  };
 
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className=" mb-3"
          style={{ backgroundColor: "#FF6F61" }}
        >
          <Container fluid>
            <Navbar.Brand href="#" style={{ color: "white" }}>
            Freestyle tournament
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}
                style={{ fontWeight:"bold",color:"black"}}>
                 Freestyle tournament
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link href="#contacto" style={{ fontWeight:"bold",color:"black",textDecoration:"none", paddingTop:"8px", paddingRight:"10px" }}>
                    Contácto
                  </Link>

                  <Nav.Link style={{  fontWeight:"bold",color:"black", }} onClick={handleClick}>
                    <div
                      className={isVisible ? styles.visible : styles.invisible}
                    >
                      Tablas
                    </div>
                    <div
                      className={!isVisible ? styles.visible : styles.invisible}
                    >
                      Home
                    </div>
                  </Nav.Link>
                  <NavDropdown
                    title="Más"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{  fontWeight:"bold",color:"black", }}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button
                    variant="link"
                    style={{ textDecoration: "none",  fontWeight:"bold",color:"black"}}
                  >
                    Search
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <h1 className={styles.title}>Este es el componente reutilizable</h1>
     
    </>
  );
}

export default NavBar;
