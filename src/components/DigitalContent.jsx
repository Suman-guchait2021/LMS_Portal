import React from "react";
import Appheading from "./Appheading";
import Leftsidemenu from "./Leftsidemenu";
import Subjectcards from "./Subjectcards"
import ReactDOM from "react-dom";

// import { PDFViewer } from "@react-pdf/renderer";
const DigitalContent = () => {
  return (
    <>
      <Appheading />
      <Leftsidemenu />
      <Subjectcards/>
      {/* <button>
      <a href="/physics.pdf#page=7">
      click here
      </a>
      </button>
      <iframe
        class="pdf"
        src="/physics.pdf"
        width="800"
        height="850"
      ></iframe> */}
    </>
  );
};

export default DigitalContent;
