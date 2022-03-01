import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [notes, setNotes] = useState([]);

	function addNote(newNote) {
		setNotes((prevNotes) => {
			// Append new note to prevNote
			return [...prevNotes, newNote];
		});
	}

	function deleteNote(id) {
		setNotes((prevNotes) => {
			// Filter out note that matches "id"
			return prevNotes.filter((noteItem, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<Header />
			<CreateArea onAdd={addNote} />
			{notes.map((noteItem, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={noteItem.title}
						content={noteItem.content}
						onDelete={deleteNote} // Pass over deletNote function as custom prop
					/>
				);
			})}
			<Footer />
		</div>
	);
}

export default App;
