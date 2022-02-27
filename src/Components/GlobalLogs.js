import React, { useEffect, useState } from "react";
import { Button, Container, Spinner, Stack } from "react-bootstrap";
import axios from "axios";
import AddModal from "./AddModal";
import RemoveModal from "./RemoveModal";

export default function Funds() {
  const [spinner, setSpinner] = useState("border");
  const [addModalActive, setAddModalActive] = useState(false);
  const [removeModalActive, setRemoveModalActive] = useState(false);
  const [logs, setLogs] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(async () => {
    let total = await axios.get(
      "https://furthermathgang-api.herokuapp.com/total"
    );
    setSum(total.data);
  });

  useEffect(async () => {
    const logsReq = await axios.get(
      "https://furthermathgang-api.herokuapp.com/logs"
    );
    let logsArray = logsReq.data;
    setLogs(logsArray);
    setSpinner(null);
  }, []);

  return (
    <>
      <Container className="mt-2">
        <Button as={Container} className="mb-2">
          Funds : ${sum}
        </Button>
        {/* <button onClick={() => console.log(sum)}>Add</button> */}
        <p className="small mb-1 text-muted"> Oldest</p>
        {logs.map((log) => {
          var classes, action;
          if (log.amount >= 0) {
            classes = "text-success";
            action = "Contributed";
          } else {
            classes = "text-danger";
            action = "Used";
          }
          let date = new Date(log.time);
          let dispDate = date.toString();
          //dispDate = dispDate.split(" ").slice(0, -2).join(" ");
          dispDate = dispDate.substring(0,24);
          return (
            <>
              <div className="mb-1 bg-dark text-white p-1 rounded">
                {log.name}
                <span> </span>
                <span className={classes}>{action} </span>$
                {Math.abs(log.amount)}
                <span> {log.reason}</span>
                <br />
                <small className="text-muted">{dispDate}</small>
              </div>
            </>
          );
        })}
        <div className="d-flex justify-content-center">
          <Spinner animation={spinner} />
        </div>
        <p className="small m-0 text-muted">Newest</p>
        <Stack direction="horizontal" gap="2">
          <Button
            variant="success"
            className="mt-2"
            onClick={() => setAddModalActive(true)}
          >
            Add Funds
          </Button>
          <Button
            variant="danger"
            className="mt-2"
            onClick={() => setRemoveModalActive(true)}
          >
            Use Funds
          </Button>
        </Stack>

        <AddModal
          show={addModalActive}
          handleClose={() => setAddModalActive(false)}
        />
        <RemoveModal
          show={removeModalActive}
          handleClose={() => {
            setRemoveModalActive(false);
          }}
        />
      </Container>
      <Container className="mt-4">
        brought to you by Further Math Gang
      </Container>
    </>
  );
}
