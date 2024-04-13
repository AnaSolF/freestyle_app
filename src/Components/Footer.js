import React from "react";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <footer className={styles.foo}>
          © 2024 Company, Inc. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Footer;