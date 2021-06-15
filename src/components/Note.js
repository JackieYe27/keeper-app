function Note( {notes, deleteNote} ) {
    
    return(
        notes.map((note,i) => {
            const {title, content} = note
            return <div className="note" key={i}>
                <h1>{title}</h1>
                <p>{content}</p>
                <button onClick={() => deleteNote(i)}>Delete</button>
            </div>
        })
    )
}

export default Note;