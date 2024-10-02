import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdHeight } from "react-icons/md";
import Chapterstable from "./Chapterstable";
import { useState } from "react";

function Subjectcards(props) {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const subjects = [
    {
      id: 1,
      subject: "Physics",
      chapters: [
        "General Physics and Measurements",
        "Mechanics",
        "Thermal Physics",
        "Electricity and Magnetism",
        "Waves and Optics",
        "Modern Physics",
      ],
      hyperlink: "www.google.com",
      color: "cornflowerblue",
    },
    {
      id: 2,
      subject: "Chemistry",
      chapters: [
        "Acids, Bases, and Salts",
        "Alcohols, Phenols, and Ethers",
        "Aldehydes, Ketones, and Carboxylic Acids",
        "Amines",
        "Analytical Chemistry",
        "Atoms and Molecules",
      ],
      hyperlink: "www.google.com",
      color: "darkviolet",
    },
    {
      id: 3,
      subject: "Biology",
      chapters: ["Human Biology", "Macro Molecules", "Cell"],
      hyperlink: "www.google.com",
      color: "cornflowerblue",
    },
    {
      id: 4,
      subject: "Geography",
      chapters: [
        "Chapter 1",
        "Chapter 2",
        "Chapter 3",
        "Chapter 4",
        "Chapter 5",
        "Chapter 6",
        "Chapter 7",
        "Chapter 8",
        "Chapter 9",
        "Chapter 10",
      ],
      hyperlink: "www.google.com",
      color: "limegreen",
    },
    {
      id: 5,
      subject: "History",
      chapters: [
        "Chapter 1",
        "Chapter 2",
        "Chapter 3",
        "Chapter 4",
        "Chapter 5",
        "Chapter 6",
        "Chapter 7",
        "Chapter 8",
        "Chapter 9",
        "Chapter 10",
      ],
      hyperlink: "www.google.com",
      color: "lightslategrey",
    },
    {
      id: 6,
      subject: "Civics",
      chapters: [
        "Chapter 1",
        "Chapter 2",
        "Chapter 3",
        "Chapter 4",
        "Chapter 5",
        "Chapter 6",
        "Chapter 7",
        "Chapter 8",
        "Chapter 9",
        "Chapter 10",
      ],
      hyperlink: "www.google.com",
      color: "lightgreen",
    },
    {
      id: 7,
      subject: "Reasoning",
      chapters: [
        "Chapter 1",
        "Chapter 2",
        "Chapter 3",
        "Chapter 4",
        "Chapter 5",
        "Chapter 6",
        "Chapter 7",
        "Chapter 8",
        "Chapter 9",
        "Chapter 10",
      ],
      hyperlink: "www.google.com",
      color: "palegreen",
    },
    {
      id: 8,
      subject: "Aptitude",
      chapters: [
        "Chapter 1",
        "Chapter 2",
        "Chapter 3",
        "Chapter 4",
        "Chapter 5",
        "Chapter 6",
        "Chapter 7",
        "Chapter 8",
        "Chapter 9",
        "Chapter 10",
      ],
      hyperlink: "www.google.com",
      color: "darkgoldenrod",
    },
    {
      id: 9,
      subject: "Verbal",
      chapters: [
        "Chapter 1",
        "Chapter 2",
        "Chapter 3",
        "Chapter 4",
        "Chapter 5",
        "Chapter 6",
        "Chapter 7",
        "Chapter 8",
        "Chapter 9",
        "Chapter 10",
      ],
      hyperlink: "www.google.com",
      color: "sienna",
    },
    {
      id: 10,
      subject: "Non-verbal",
      chapters: [
        "Chapter 1",
        "Chapter 2",
        "Chapter 3",
        "Chapter 4",
        "Chapter 5",
        "Chapter 6",
        "Chapter 7",
        "Chapter 8",
        "Chapter 9",
        "Chapter 10",
      ],
      hyperlink: "www.google.com",
      color: "pink",
    },
  ];

  const subjectsList = subjects.map((subject, id) => (
    <Card
      key={id}
      style={{
        width: "256px",
        height: "119px",
        margin: "3px",
        backgroundColor: "#5c5a64",
        color: "white",
        display: "flex",
        float: "left",
        // flexWrap: 'wrap'
      }}
    >
      <Card.Body>
        <Card.Title>
          <b>{props.item}</b>
        </Card.Title>
        <Card.Text>{subject.subject}</Card.Text>
        <Button
          variant="primary"
          style={{ fontSize: "12px", height: "30px" }}
          onClick={() => {
            setSelectedSubject(subject);
          }}
        >
          View
        </Button>
      </Card.Body>
    </Card>
  ));
  return (
    <>
      {subjectsList}
      {selectedSubject && (
        <Chapterstable
          chapters={selectedSubject.chapters}
          color={selectedSubject.color}
        />
      )}
    </>
  );
}

export default Subjectcards;
