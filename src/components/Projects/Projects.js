import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodApp from "../../Assets/Projects/chatify.png";
import ecommerceImg from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodApp}
              isBlog={false}
              title="Food Ordering App"
              description="A full-stack food ordering application with features for browsing menus, adding items to cart, placing orders, and order tracking. Built with modern web technologies."
              ghLink="https://github.com/Yog-coder/food-ordering-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerceImg}
              isBlog={false}
              title="E-Commerce Platform"
              description="A full-stack e-commerce application with product listings, shopping cart, user authentication, order management, and payment integration."
              ghLink="https://github.com/Yog-coder/ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodApp}
              isBlog={false}
              title="Smart Loan Approver"
              description="An intelligent loan approval system using machine learning to assess creditworthiness and automate the loan application process."
              ghLink="https://github.com/Yog-coder/smart-loan-approver"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerceImg}
              isBlog={false}
              title="Portfolio Website"
              description="A modern personal portfolio website showcasing projects, skills, and achievements with responsive design."
              ghLink="https://github.com/Yog-coder/portfolio-2"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
