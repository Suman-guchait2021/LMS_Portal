import React from "react";
import Appheading from "./Appheading";
import Leftsidemenu from "./Leftsidemenu";
import CircleTimer from "./CircleTimer";
import Login from '@react-login-page/page3';

const LiveClass = () => {
  return (
    <>
      <Appheading />
      <Leftsidemenu />
      <div>LiveClass</div>
      <Login/>
    </>
  );
};

export default LiveClass;
