import React from "react";
import Form from "react-bootstrap/Form";
import styles from "@/styles/contacto.module.css";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
const Contacto = () => {
  return (
    <>
      <NavBar />
      <div className={styles.contacto}>
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
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default Contacto;
