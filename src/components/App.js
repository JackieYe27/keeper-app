import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"
import CreateArea from "./CreateArea"
import {useState} from "react";


function App() {
    const [notesArr, setNotesArr] = useState(notes);

    const addNote = (note) => {
        setNotesArr([...notesArr, note]);
    }

    const deleteNote = (index) => {
        console.log(index)
        setNotesArr(notesArr.filter((note,i) => {
            return i !== index;
        }))
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={addNote} notesArr={notesArr} setNotesArr={setNotesArr}/>
            <Note notes={notesArr} deleteNote={deleteNote}/>
            <Footer />
        </div>
    )
}

export default App;