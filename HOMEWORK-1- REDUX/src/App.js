import "./App.css";
import Filter from "./components/Filter/Filter";
import NoteContent from "./components/NoteContent/NoteContent";
import NoteCard from "./components/NoteCard/NoteCard";

function App() {
  return (
    <div>
      <NoteContent />
      <Filter />
      <NoteCard />
    </div>
  );
}

export default App;



// https://github.com/abdulkerimkuscu/redux-noteapp
// https://github.com/cembicakci/redux-notes-app
