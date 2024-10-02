import {React,useState} from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "./CircleTimer.module.css";

const children = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60)
  const seconds = remainingTime % 60

  return `${minutes}:${seconds}`
}

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className={styles.timer}>Finished...</div>;
  }

  return (
    <div className={styles.timer}>
      <div className={styles.text}>You have left</div>
      <div className={styles.value}>{remainingTime}</div>
      <div className={styles.text}>seconds</div>
    </div>
  );
};


function CircleTimer({ timeOver, setTimerKey }) {
  return (
    <div className={styles.CircleTimer}>
      <h1 className={styles.head}>{/* Timer */}</h1>
      <div className={styles.timerwrapper}>
        <CountdownCircleTimer
          isPlaying
          duration={120}
          colors={["#87CEEB", "#4caf50", "#ff9800", "red"]}
          colorsTime={[120, 72, 36, 0]}
          onComplete={() => {
            timeOver();
            return { shouldRepeat: true, delay: 1 };
          }}
          size={120}
          strokeWidth={8}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <p className={styles.info}>
        {/* Change component properties in the code filed on the right to try
        difference functionalities */}
      </p>
    </div>
  );
}
export default CircleTimer;
