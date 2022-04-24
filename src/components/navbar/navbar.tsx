import React from "react";
import { StyledTopbar } from "../styles/topbarStyle";
import { Nav, Navbar, Container } from "react-bootstrap";

const Topbar: React.FC = () => {
  return (
    <StyledTopbar>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">oslo</Navbar.Brand>
          <Nav>
            <Nav.Link href="#features">FEATURES</Nav.Link>
            <Nav.Link href="#reviews">REVIEWS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </StyledTopbar>
  );
};

export default Topbar;
