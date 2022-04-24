import React, { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import {
  StyledContact,
  HeaderOverlay,
  SignUpContainer,
  FormContainer,
} from "../styles/contactStyle";

const Contact: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <StyledContact id="contact">
      <HeaderOverlay>
        <Container>
          <SignUpContainer>
            <p>05 // SIGN UP</p>
            <h2>Get creative with this revolutionary tool</h2>
            <h6>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              consequatur aperiam eaque nostrum saepe molestias veniam sed
              molestiae aliquid optio!
            </h6>
          </SignUpContainer>
          <FormContainer>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmail}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePassword}
                />
              </Form.Group>
              <Button type="submit" onClick={handleShow}>
                Sign Up
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Thank You!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Thanks for Signing Up. We'll make best of your time!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form>
          </FormContainer>
        </Container>
      </HeaderOverlay>
    </StyledContact>
  );
};

export default Contact;
