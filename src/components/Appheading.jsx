import styles from "./Appheading.module.css";
import React, { Component } from "react";
import Sticky from "react-sticky-el";

const Appheading = () => {
  return (
    <>
      <Sticky>
        <header className={styles.heading}>
          Suman's Pathsala
        </header>
      </Sticky>
    </>
  );
};

export default Appheading;
