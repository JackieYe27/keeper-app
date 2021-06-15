import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea({addNote}) {
  const [isExpanded, setExpanded] = useState(false);

  const [newNote, setNewNote] = useState({
      title:"",
      content:""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addNote(newNote);
    setNewNote({
        title: "",
        content: ""
    })
  }
  const handleChange = (e) => {
      const {value, name} = e.target;
      setNewNote({...newNote, [name]:value});
  }

  const expand = () => {
      setExpanded(true);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="create-note">
        {
          isExpanded ? <input name="title" value={newNote.title} onChange={handleChange} placeholder="Title" /> : null
        }
        <textarea name="content" value={newNote.content} onChange={handleChange} onClick={expand} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <Fab><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;