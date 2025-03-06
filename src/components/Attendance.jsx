import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

const Attendance = ({ students, handleAttendance }) => {
  const [attendance, setAttendance] = useState([]);

  const markAttendance = (sno, status) => {
    setAttendance((prev) => {
      const updatedAttendance = prev.filter((a) => a.sno !== sno);
      updatedAttendance.push({ sno, status });
      return updatedAttendance;
    });
  };

  const submitAttendance = () => {
    handleAttendance(attendance);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-primary">Mark Attendance</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Reg No</th>
            <th>Name</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.sno}>
              <td>{student.sno}</td>
              <td>{student.regno}</td>
              <td>{student.name}</td>
              <td>
                <Button variant="success" onClick={() => markAttendance(student.sno, "PRESENT")}>✅</Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => markAttendance(student.sno, "ABSENT")}>❌</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className="mt-3" variant="primary" onClick={submitAttendance}>Submit Attendance</Button>
    </Container>
  );
};

export default Attendance;
