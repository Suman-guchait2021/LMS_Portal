import React from "react";
import DateObject from "react-date-object";
import styles from "./Dashboard.module.css";
import Calendar from "react-calendar";
import Data from "./Data";
import GaugeChart from "./GaugeChart";
import BasicExample from "./BasicExample";
import "./Calendar.css";
import EventHistory from "./EventHistory";
import { Outlet } from "react-router-dom";
import Appheading from "./Appheading";
import Leftsidemenu from "./Leftsidemenu";

const Dashboard = () => {
  var date = new DateObject();
  var date2 = date.format();
  var date3 =
    date2[8] +
    date2[9] +
    date2[7] +
    date2[5] +
    date2[6] +
    date2[4] +
    date2[0] +
    date2[1] +
    date2[2] +
    date2[3];
  const webinarSchedule = [
    { date: "22/08/2024", person: "Dr. Suman Guchait" },
    { date: "23/08/2024", person: "Dr. Suman Guchait" },
    { date: "24/08/2024", person: "Dr. Suman Guchait" },
    { date: "25/08/2024", person: "Dr. Suman Guchait" },
    { date: "26/08/2024", person: "Dr. Suman Guchait" },
    { date: "27/08/2024", person: "Dr. Suman Guchait" },
  ];
  const webinarScheduleFinal = webinarSchedule.map((key) => (
    <p>{`${key.date} - ${key.person}`}</p>
  ));
  const subjects = ["Academic", "Tech", "Competitive", "General Knowledge"];
  const cardItems = subjects.map((key) => (
    <BasicExample item={key}>{key}</BasicExample>
  ));

  return (
    <>
    <Appheading/>
    <Leftsidemenu/>
      <div className={styles.dashboard}>
        <div className={styles.logintime}>
          <h4>You last logged in {date3}</h4>
        </div>
        <div>
          <div>
            <div className={styles.element}>
              <GaugeChart className={styles.chart} />
            </div>
            {/*1*/}
            <div className={styles.element}>
              {/*1*/}
              <Data />
            </div>
          </div>
          <div>
            <div className={styles.element}>
              <Calendar />
            </div>
            {/*2*/}
            <div className={styles.element}>
              <marquee className={styles.scroll} direction="up">
                {webinarScheduleFinal}
              </marquee>
            </div>
            {/*2*/}
          </div>
          <div>
            {/*3*/}
            <div className={styles.element}>
              <EventHistory></EventHistory>
            </div>
            {/*3*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
