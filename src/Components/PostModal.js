import React, { useRef, useState } from "react";
import { Modal, Form, Button, Stack, Col } from "react-bootstrap";
import axios from "axios";

export default function PostModal({ show, handleClose }) {
  const [anonymous, setAnonymous] = useState(false);
  const nameRef = useRef();
  const conRef = useRef();

  const handleCheck = (e) => {
    setAnonymous(e.target.checked);
  };
  const HandleSubmit = (e) => {
    let name = nameRef.current.value;
    if (anonymous) {
      name = "Anonymous";
    }
    if (nameRef.current.value === "_Select Name_" && anonymous === false) {
      e.preventDefault();
      return alert("Please select your name!");
    }
    let postInfo = {
      name: name,
      content: conRef.current.value,
    };

    try {
      axios.post("https://furthermathgang-api.herokuapp.com/posts", postInfo);
      alert(
        "Successfully submitted!! Please refresh the page in order to reflect the changes onto the global logs."
      );
    } catch (err) {
      alert(`Error! : ${err}`);
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={HandleSubmit}>
        <Modal.Header closeButton>Submit Post</Modal.Header>
        <Modal.Body>
          <Stack direction="horizontal" gap={2}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Select ref={nameRef} type="text" disabled={anonymous}>
                <option>_Select Name_</option>
                <option>Andre</option>
                <option>Ferrois</option>
                <option>Mai</option>
                <option>Gideon</option>
                <option>Hunter</option>
                <option>Zhuo Yan</option>
                <option>Hao</option>
                <option>Sherilyn</option>
                <option>Tapan</option>
                <option>Lionel</option>
                <option>Xin Yan</option>
                <option>Han Xuan</option>
                <option>Zhi Heng</option>
                <option>Jun Wei</option>
                <option>Remus</option>
              </Form.Select>
            </Form.Group>

            <Form.Label>Anonymous?</Form.Label>
            <Form.Check onChange={handleCheck}></Form.Check>
          </Stack>
          {/* <Col xs={7}> */}
          <Form.Label>Content</Form.Label>
          <Form.Control
            ref={conRef}
            as="textarea"
            placeholder="Input any content"
            required
          ></Form.Control>
          {/* </Col> */}
          <Button type="submit" variant="success" className="mt-3">
            Post
          </Button>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
