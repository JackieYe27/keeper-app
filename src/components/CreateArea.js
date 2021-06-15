import React, {useState} from "react";

function CreateArea({addNote}) {
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

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name="title" value={newNote.title} onChange={handleChange} placeholder="Title" />
        <textarea name="content" value={newNote.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;