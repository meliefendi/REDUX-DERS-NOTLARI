import { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import styles from "./NoteContent.module.css";
import check from "../../assets/check.svg";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";
import { nanoid } from "@reduxjs/toolkit";
import { BsGithub, BsTwitter } from "react-icons/bs";

const NoteContent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("bgYellow");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length < 3 || content.length < 3) {
      alert("Inputs Must be at Least 3 Characters");
      return;
    }

    dispatch(addNote({ id: nanoid(), title, content, color }));

    setTitle("");
    setContent("");
  };

  return (
    //form ve color çıktıları
    <Container >

      <Row>
        <h1 className={styles.mainTitle}>Note App </h1>
        <Col md={3}>
          <div className={styles.footer}>

            <h6 className=""> Developed by{" "}
            </h6>
            <button className={styles.socialMediaIcons} onClick={() => window.open("https://github.com/meliefendi", "_blank")}>
              <BsGithub size={35} />
            </button>

            <button className={styles.socialMediaIcons} onClick={() => window.open("/", "_blank")}>
              <BsTwitter size={35} />
            </button>

          </div>
        </Col>

        {/* Form */}

        <Col md={6} className={styles.NoteContentContainer}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Note Title</Form.Label>
              <Form.Control type="text" placeholder="Enter a title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Note</Form.Label>
              <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
            </Form.Group>
            <h4>Choose a Color</h4>
            <div className={styles.colorBox}>

              <button type="button" className={styles.NoteContentCheckColorYellow} onClick={(e) => setColor("bgYellow")} >
                {color === "bgYellow" && <img src={check} alt="" />}
              </button>

              <button type="button" className={styles.NoteContentCheckColorBlue} onClick={(e) => setColor("bgBlue")} >
                {color === "bgBlue" && <img src={check} alt="" />}
              </button>

              <button type="button" className={styles.NoteContentCheckColorGrey} onClick={(e) => setColor("bgGrey")} >
                {color === "bgGrey" && <img src={check} alt="" />}
              </button>

              <button type="button" className={styles.NoteContentCheckColorGreen} onClick={(e) => setColor("bgGreen")}>
                {color === "bgGreen" && <img src={check} alt="" />}
              </button>

            </div>
            <button className={styles.submitButton}>Add Note</button>
          </Form>
        </Col>
        <Col md={3}></Col>

      </Row>
      {/* Color */}
      <Row >
        <Col md={3}></Col>
        <Col md={6} className={styles.NoteContentContainer}>
        </Col>

        <Col md={3}></Col>
      </Row>
      {/* Icons */}


    </Container>
  );
};

export default NoteContent;
