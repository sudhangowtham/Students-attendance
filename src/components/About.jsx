import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-4 text-center">
      <h2 className="text-primary">About This App</h2>
      <p className="lead mt-3">
        This student attendance management system is designed to help educators track attendance efficiently.
      </p>
      <p>
        Built using <strong>React</strong>, <strong>Bootstrap</strong>, and <strong>Node.js</strong>, it provides a seamless experience for managing student records.
      </p>
    </Container>
  );
};

export default About;
