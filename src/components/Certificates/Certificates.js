import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "../Projects/ProjectCards";
import certImg from "../../Assets/Projects/blog.png";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certifications I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={certImg}
              title="Programming in Python"
              description="Coursera - University of Michigan - Learn Python basics, data structures, and programming fundamentals."
              ghLink="https://www.coursera.org/account/accomplishments/verify/VUUNL5I0H2SU"
              demoLink="https://www.coursera.org/account/accomplishments/verify/VUUNL5I0H2SU"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={certImg}
              title="Python Data Structures"
              description="Coursera - University of Michigan - Advanced Python concepts and data structures implementation."
              ghLink="https://www.coursera.org/account/accomplishments/verify/T83TWVH9LOGN"
              demoLink="https://www.coursera.org/account/accomplishments/verify/T83TWVH9LOGN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={certImg}
              title="Using Python to Access Web Data"
              description="Coursera - University of Michigan - Learn to use Python for fetching and processing web data."
              ghLink="https://www.coursera.org/account/accomplishments/verify/S3VCAK0BXJX6"
              demoLink="https://www.coursera.org/account/accomplishments/verify/S3VCAK0BXJX6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={certImg}
              title="Full Stack Web Development"
              description="HyperStack - Comprehensive full stack web development certification covering frontend and backend technologies."
              ghLink="https://hyperstack.id/credential/0a3b2407-fb30-4dc8-a1c7-8df3b70721b5?view=recipient"
              demoLink="https://hyperstack.id/credential/0a3b2407-fb30-4dc8-a1c7-8df3b70721b5?view=recipient"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;