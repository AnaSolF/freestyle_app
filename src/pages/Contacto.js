import React from "react";
import Form from "react-bootstrap/Form";
import styles from "@/styles/contacto.module.css";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { Button } from "react-bootstrap";
// import { useMainContextProvider } from "@/Context/MainContextProvider";
// import Tablas from "@/Components/Tablas";
// import Articulo from "@/Components/Articulo";

const Contacto = () => {

  return (
    <>
      <div className={styles.contacto} id="contacto">
        <h2 className={styles.sTitle}>Contácto</h2>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="outline-success" style={{float:"right"}}>Enviar</Button>
        </Form>
      </div>
    </>
  );
};

export default Contacto;
