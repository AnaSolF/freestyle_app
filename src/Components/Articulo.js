import React from "react";
import styles from "@/styles/articulo.module.css";
import data from "@/data/data.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Articulo = () => {

  return (
    <div className={styles.container}>
      {data.map((doc, index) => (
        <Card style={{ width: "18rem" }} className={styles.art}>
          <Card.Img variant="top" src={doc.img} height={"230px"} />
          <Card.Body>
            <Card.Title>{doc.titulo}</Card.Title>
            <Card.Text>{doc.descripcion}</Card.Text>
            <Button variant="link">ver</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Articulo;
