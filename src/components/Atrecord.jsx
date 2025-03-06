import React from "react";
import { Container, Table } from "react-bootstrap";

const Atrecord = ({ List }) => {
  return (
    <Container className="mt-5">
      <h2 className="text-primary">Attendance Record</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>REG.NO</th>
            <th>NAME</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {List.map((record, index) => (
            <tr key={index}>
              <td>{record.sno}</td>
              <td>{record.regno}</td>
              <td>{record.name}</td>
              <td className={record.status === "PRESENT" ? "text-success" : "text-danger"}>
                {record.status}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Atrecord;
