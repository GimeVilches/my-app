import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import React, { Component } from 'react'

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <Navbar className="navbar-container navbar"  expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h1 className= "logo">Techno stuff</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to={"/"}>
                  
                Inicio
              </Nav.Link>
              <NavDropdown className= "opciones" title="Categorías" id="basic-nav-dropdown"  >
                <NavDropdown.Item as={Link} to="/category">
                  
                  Todos los productos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/category/celular">
            Celulares
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/Otros">
                    Accesorios

                    </NavDropdown.Item>
                
              </NavDropdown>
              
              <Nav.Link as={Link} to="/shipping">
                  
                Envios
              </Nav.Link>
              <Nav.Link as={Link} to="/payment">
                  
                Medios de pago
                
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                 
                Contactanos
              </Nav.Link>
            </Nav>
            <Nav.Link as={Link} to="/cart">
            <CartWidget />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  export default NavBar;
  