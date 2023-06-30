import React, { useState } from "react";

function CreateArea(props) {
  
  //creating state variables
  const [note, setNote] = useState({
    title: "",
    content:""
  });


  //function to change input
  function addNote(event){
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event){
    event.preventDefault();

    setNote({
      title: "",
      content:""
    });

    props.onAdd(note);
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={addNote}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={addNote}
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
