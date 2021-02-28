import { useState } from "react";

export function Offline() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input type="text" value={title} name="title" onChange={(event) => setTitle(event.target.value)} />
      <input
        type="text"
        value={description}
        name="description"
        onChange={(event) => setDescription(event.target.value)}
      />
      <button onClick={() => setNotes((prevNotes) => [...prevNotes, { title, description }])}>Add note</button>
      {notes.map(({ title, description }) => (
        <div key={`${title}-${description}`}>
          <h2>{title}</h2>
          <span>{description}</span>
        </div>
      ))}
    </div>
  );
}
