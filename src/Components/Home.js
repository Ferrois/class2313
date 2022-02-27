import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Spinner,
  Stack,
} from "react-bootstrap";
import PostModal from "./PostModal";

export default function Home() {
  const [spinner, setSpinner] = useState("border");
  const [postModalActive, setPostModalActive] = useState(false);
  const [posts, setPosts] = useState([]);
  const handleClose = () => {
    setPostModalActive(false);
  };
  useEffect(async () => {
    const postReq = await axios.get(
      "https://furthermathgang-api.herokuapp.com/posts"
    );
    let postsArray = postReq.data;
    setPosts(postsArray);
    setSpinner(null);
  }, []);
  return (
    <>
      <Container>
        <h2 className="display-1">Home</h2>
        <Button
          onClick={() => {
            setPostModalActive(true);
          }}
          variant="success"
          className="mb-2 mt-2"
        >
          Post something!
        </Button>

        {posts.map((post) => {
          let date = new Date(post.time);
          let dispDate = date.toString();
          dispDate = dispDate.split(" ").slice(0, -2).join(" ");
          return (
            <Card className="bg-light mb-1">
              <Card.Body>
                <Card.Title>{post.name}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <small>{`${dispDate}`}</small>
              </Card.Body>
            </Card>
          );
        })}
        <div className="d-flex justify-content-center">
          <Spinner animation={spinner} />
        </div>
      </Container>
      <Container className="mt-4">
        brought to you by Further Math Gang
      </Container>
      <PostModal handleClose={handleClose} show={postModalActive} />
    </>
  );
}
