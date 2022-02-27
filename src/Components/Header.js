import React, { useContext } from "react";
import { Container, Navbar, Stack, Nav, Col,} from "react-bootstrap";
import { LoginContext } from "../Context/LoginContext";
export default function Header() {
    const [login,setLogin] = useContext(LoginContext);
    const handleLogout = () => {
        localStorage.setItem("loginToken",null);
        setLogin({...login,loggedIn : false})
    }

  return (
    <Container fluid className="bg-light">
      <Navbar bg="light" expand="lg">
        <Container className="bg-light d-flex">
          <Stack direction="horizontal" gap="2">
            <h2>ASRJC 23/13</h2>
            <h4>Website</h4>
          </Stack>
          {/* <Container fluid /> */}
          {/* <Col xs="auto"> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav style={{marginLeft: "auto"}}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/funds">Funds</Nav.Link>
              <Nav.Link href="/wheel">Wheel</Nav.Link>
              <Nav.Link href="/info">Info</Nav.Link>
              <Nav.Link className="text-danger" onClick={handleLogout}>Log out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* </Col> */}
        </Container>
      </Navbar>
    </Container>
  );
}
