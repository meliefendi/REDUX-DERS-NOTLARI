import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import styles from "./NoteCard.module.css";
import { useSelector } from "react-redux";
import { deleteNote } from "../../redux/notes/notesSlice";
import { useDispatch } from "react-redux/es/exports";

function Notes() {
  const items = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();

  //Filtering
  // NoteSlice'da tanımladığımız activeFilter'ı aldık.
  const activeFilter = useSelector((state) => state.notes.activeFilter); 
  
  const filteredItems = items.filter(
    // Search'e girilen değerler activeFilter'e kaydediliyordu. 
    //Burda search'e girilen değerler ile title'daki değerler bir birini kapsıyorsa filteredItems'a kaydet diyerek. Filtreleme yaptırdık.
    (item) => item.title.toLowerCase().includes(activeFilter.toLowerCase())
  );

  // Deleting
  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNote(id));
    }
  };

  return (
    <div>
      {/* kayıt edilen kartlar */}
      <Container>
        <Row>
          {filteredItems.map((item) => (
            <Col sm={3} key={item.id}>
              <Card className={styles.cardSize}>
                <Card.Body className={`${item.color}`}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.content} </Card.Text>
                  <button
                    className={styles.btnIcon}
                    type="button"
                    onClick={() => handleDestroy(item.id)}
                  >
                    <AiFillDelete className={styles.icons} size="35" />
                  </button><button
                    className={styles.btnIcon}
                    type="button"                
                  >
                    <AiFillEdit className={styles.icons} size="35" />
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Notes;
