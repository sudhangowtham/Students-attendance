import React, { useState } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";

const Student = ({ data, addStudent }) => {
  const [newStudent, setNewStudent] = useState({ sno: "", regno: "", name: "" });

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newStudent.sno && newStudent.regno && newStudent.name) {
      addStudent(newStudent);
      setNewStudent({ sno: "", regno: "", name: "" });
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-primary">Student List</h2>
      <Table striped bordered hover className="shadow-sm">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Reg No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td>{student.sno}</td>
              <td>{student.regno}</td>
              <td>{student.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add Student Form */}
      <h3 className="mt-4">Add New Student</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>S.No</Form.Label>
          <Form.Control type="number" name="sno" value={newStudent.sno} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Reg No</Form.Label>
          <Form.Control type="number" name="regno" value={newStudent.regno} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={newStudent.name} onChange={handleChange} required />
        </Form.Group>
        <Button className="mt-3" variant="success" type="submit">Add Student</Button>
      </Form>
    </Container>
  );
};

export default Student;
