import React from "react";
import { Container } from "react-bootstrap";

export default function Info() {
  return (
    <Container>
      <article>
        <h1 className="m-2 display-1">Information</h1>
        <section className="p-2 bg-light rounded m-1">
          <h2>What the funds will be used for</h2>
          <p>
            It will be used to purchase H2 Further Math and Math and Physics
            notes
          </p>
          <p3 className="bg-danger text-black rounded p-1">
            <b>Purchasing items that the class collectively needs</b>
          </p3>
        </section>
        <section className="p-2 bg-light rounded m-1">
          <h2>What the funds will NOT be used for</h2>
          <p>
            Buying things for personal use only, Purchasing of notes for
            contrasting subjects such as H1 Econs, Geog, Lit, Hist and stuff
          </p>
        </section>
        <section className="p-2 bg-light rounded m-1">
          <h2>Where will the money come from?</h2>
          <p>$3 / month / person</p>
          <p>
            If you are generous like hunter, feel free to cash in extra money
          </p>
        </section>
        <section className="p-2 bg-light rounded m-1">
          <h2>Appointment of Class Fund Manager</h2>
          <h4>What to expect?</h4>
          <ul>
            <li>Tally up the funds and ensure no missing $$</li>
            <li>Record down whenever the fund is used</li>
            <li>Be responsible for the safety of the class fund</li>
            <li>
              Make sure that whenever the class fund is used, it is for the
              class, and not for personal utility only
            </li>
          </ul>
        </section>
        <p className="bg-primary text-white rounded p-1">
          If u have any questions, ask Zhuo Yan, not me lol
        </p>
      </article>
    </Container>
  );
}
