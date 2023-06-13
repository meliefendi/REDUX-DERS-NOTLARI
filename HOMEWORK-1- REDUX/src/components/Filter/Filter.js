import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Filter.module.css";
import { searchNote } from "../../redux/notes/notesSlice";
import { useDispatch } from "react-redux/es/exports";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* search bar */}
      <Container className={styles.container}>

        <Col md={3}></Col>
        <Col md={6}>
          <input type="text" placeholder="Search Notes"
          className={styles.searchInput}
            aria-label="Search"
            onChange={(e) => dispatch(searchNote(e.target.value))} // Search butonuna girilen değerler, searchNote fonksiyonu aracılığı ile dispatch edilerek notesSlice'a gönderildi.
          />
        </Col>
        <Col md={3}></Col>

      </Container>
    </div>
  );
};

export default Filter;
