import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
<p style={{ textAlign: "justify" }}>
            I am <span className="purple">Yogesh S</span>, a 6th semester B.E. student in the{" "}
            <span className="purple">Information Science and Engineering</span> department at{" "}
            <span className="purple">P.E.S. College of Engineering</span>.
            <br />
            I am passionate about <span className="purple">software development</span>,{" "}
            <span className="purple">problem-solving</span>, and emerging technologies.
            <br />
            I enjoy working on coding challenges, learning data structures and algorithms, and building innovative real-world projects.
            <br />
            I am eager to strengthen my technical skills and gain practical industry experience through internships and collaborative opportunities.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Yogesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
