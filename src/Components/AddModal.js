import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

export default function AddModal({ show, handleClose }) {
  const HandleSubmit = (e) => {
    // e.preventDefault();
    if (nameRef.current.value === "_Select Name_") return alert("Please select your name!")
    let logInfo = {
      name: nameRef.current.value,
      amount: parseFloat(amountRef.current.value),
      reason: "To Class Funds!"
    };
    try {
      axios.post("http://localhost:4000/logs", logInfo);
      alert("Successfully contributed!! Please refresh the page in order to reflect the changes onto the global logs.")
    } catch (err) {
      alert(`Error! : ${err}`);
    }
    handleClose()
  };
  const nameRef = useRef();
  const amountRef = useRef();
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={HandleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Contribute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Select ref={nameRef} type="text" required>
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
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              ref={amountRef}
              type="number"
              required
              min={0.05}
              step={0.05}
            ></Form.Control>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="success" type="submit">
              Contribute
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
