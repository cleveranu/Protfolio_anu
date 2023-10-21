import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anukanksha Priya </span>
            from <span className="purple"> Bihar, India.</span>
            <br /> I am a third year student pursuing a Btech in the field of Computer Science and Engineering  with specialization in Internet of Things.
            <br />
            Additionally, I am currently a frontend intern at Prodigal AI
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies and series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am eager to make a modest impact on this world!"{" "}
          </p>
          <footer className="blockquote-footer">Anukanksha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
