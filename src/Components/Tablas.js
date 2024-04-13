import React from "react";
import Table from "react-bootstrap/Table";
import styles from "@/styles/tablas.module.css";
import data from "@/data/data.json";
const Tablas = () => {
  const { tablas } = data;
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          {tablas.map((user, id) => (
            <tbody key={user.id}>
              <tr>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.apellido} </td>
                <td>{user.userName} </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default Tablas;
