import React, { useRef, useContext, useState, useEffect } from "react";
import {
  Button,
  Container,
  Form,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { LoginContext } from "../Context/LoginContext";
import axios from "axios";

export default function Login() {
  const [showNotif,setShowNotif] = useState(true);
  const [code, setCode] = useState();
  const [login, setLogin] = useContext(LoginContext);
  useEffect(async () => {
    const recCode = await axios.get(
      "https://furthermathgang-api.herokuapp.com/logintokencode"
    );
    setCode(recCode.data);
  }, []);
  const codeRef = useRef();
  const handleSubmit = (e) => {
    if (codeRef.current.value !== code) return alert("Wrong access code!");
    localStorage.setItem("loginToken", code);
    setLogin({ ...login, loggedIn: true });
  };
  const handleClose = () => {
    setShowNotif(false)
  }
  return (
    <>
      <Container className="d-flex justify-content-center flex-column align-items-center">
        <Notif show={showNotif} handleClose={handleClose} />
        <Form onSubmit={handleSubmit} className="mt-2">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Input Access Code</Form.Label>
            <Form.Control
              ref={codeRef}
              type="number"
              required
              min={0}
              step={1}
            ></Form.Control>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="success" type="submit">
              Access
            </Button>
          </div>
        </Form>
        <div className="bg-primary p-2 mt-5 rounded text-white">
          If you forgot the code you can ask Ferrois or somebody who knows the
          code!
        </div>
        <div className="bg-dark p-2 mt-1 rounded text-white">
          You only have to login once and the system will recognise your device
          permanently!
        </div>
      </Container>
    </>
  );
}
function Notif({ show,handleClose }) {
  // const [position, setPosition] = useState('top-start');

  return (
    <ToastContainer position={"bottom-start"} className="p-3">
      <Toast show={show} onClose={handleClose} delay={4000} autohide>
        <Toast.Header closeButton={true}>
          <strong className="me-auto">Welcome</strong>
        </Toast.Header>
        <Toast.Body>
          Welcome to 23/13 Class website! <br /> aka Further Math Gang
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
