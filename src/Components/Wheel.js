import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "Ferrois" },
  { option: "Andre" },
  { option: "Sherilyn" },
  { option: "Zhuo Yan" },
  { option: "Xin Yan" },
  { option: "Remus" },
  { option: "Lionel" },
  { option: "Tapan" },
  { option: "Hao" },
  { option: "Mai" },
  { option: "Gideon" },
  { option: "Han Xuan" },
  { option: "Hunter" },
  { option: "Jun Wei" },
  { option: "Zhi Heng" },
];

export default function ClassWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleWinner = () => {
    let winner = data[prizeNumber].option;
    setWinner(winner);
    setModalActive(true);
  };

  return (
    <Container className="d-flex align-items-center flex-column">
        <div className="bg-primary rounded p-2 m-1 text-white"> Class wheel spinning thing gambling or something</div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#C00", "#00C"]}
        // textColors={["#ffffff"]}
        onStopSpinning={() => {
          handleWinner();
          setMustSpin(false);
        }}
      />
      <Button onClick={handleSpinClick} variant="success">Spin</Button>
      <Modal show={modalActive}>
        <Modal.Header>Congratulations</Modal.Header>
        <Modal.Body>
          <p>{winner} Won! or maybe not so congratulations... hahahah</p>
          <Button onClick={() => setModalActive(false)}>Cool</Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
