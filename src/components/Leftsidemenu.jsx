import React from "react";
import styles from "./Leftsidemenu.module.css";
import { NavLink, Link } from "react-router-dom";

function Leftsidemenu() {
  return (
    <div className={styles.leftsidemenu}>
      <ul className={styles.navitemlist}>
        <li className={styles.navitem}>
          <div>
            <NavLink
              className={`active,${styles.item}`}
              aria-current="page"
              to="/"
              style={{ textDecoration: "none", color: "unset" }}
            >
              Dashboard
            </NavLink>
          </div>
          <div>
            <NavLink
              className={`active,${styles.item}`}
              aria-current="page"
              to="/digitalcontent"
              style={{ textDecoration: "none", color: "unset" }}
            >
              Library
            </NavLink>
          </div>
          <div>
            <NavLink
              className={`active,${styles.item}`}
              aria-current="page"
              to="/doubtsolve"
              style={{ textDecoration: "none", color: "unset" }}
            >
              Doubt Solve
            </NavLink>
          </div>
          <div>
            <NavLink
              className={`active,${styles.item}`}
              aria-current="page"
              to="/liveclass"
              style={{ textDecoration: "none", color: "unset" }}
            >
              Live Class
            </NavLink>
          </div>
          <div>
            <NavLink
              className={`active,${styles.item}`}
              aria-current="page"
              to="/quizz"
              style={{ textDecoration: "none", color: "unset" }}
            >
              Quizz
            </NavLink>
          </div>
          <div>
            <NavLink
              className={`active,${styles.item}`}
              aria-current="page"
              to="/webinar"
              style={{ textDecoration: "none", color: "unset" }}
            >
              Webinar
            </NavLink>
          </div>
        </li>
      </ul>
      <h6>All rights reserved.</h6>
    </div>
  );
}

export default Leftsidemenu;
