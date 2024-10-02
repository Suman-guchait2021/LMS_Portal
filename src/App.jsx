import React from "react";
import "./App.css";
import Login from "@react-login-page/page3";
import Appheading from "./components/Appheading";
import Leftsidemenu from "./components/Leftsidemenu";
import Dashboard from "./components/Dashboard";
import DigitalContent from "./components/DigitalContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LiveClass from "./components/LiveClass";
import DoubtSolve from "./components/DoubtSolve";
import Quizz from "./components/Quizz";
import Webinar from "./components/Webinar";
import { pdfjs } from "react-pdf";
import { subjectsContext } from "./context/Context";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
function App() {
  return (
    <>
      <subjectsContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/DigitalContent" element={<DigitalContent />}></Route>
            <Route path="/Appheading" element={<Appheading />}></Route>
            <Route path="/Leftsidemenu" element={<Leftsidemenu />}></Route>
            <Route path="/liveclass" element={<LiveClass />}></Route>
            <Route path="/doubtsolve" element={<DoubtSolve />}></Route>
            <Route path="/quizz" element={<Quizz />}></Route>
            <Route path="/webinar" element={<Webinar />}></Route>
            <Route
              path="*"
              element={<h1 style={{ color: "red" }}>404 Error....</h1>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </subjectsContext.Provider>
    </>
  );
}

export default App;
