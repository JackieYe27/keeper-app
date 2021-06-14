function Note( {notes} ) {
    
    return(
        notes.map(note => {
            const {key, title, content} = note
            return <div className="note" key={key}>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        })
    )
}

export default Note;