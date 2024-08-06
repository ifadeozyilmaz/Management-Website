import React, { useState, useEffect } from 'react';
import "../Notes/style.css"

export default function Notes() {

    const [note, setNote] = useState('');
    const [notes, setNotes] = useState<string[]>([]);

    useEffect(() => {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    }, []);
    const handleNoteChange = (e: any) => {
        setNote(e.target.value);
    };
    const saveNote = () => {
        if (note.trim() !== '') {
            setNotes(prevNotes => {
                const updatedNotes = [...prevNotes, note];
                localStorage.setItem("notes", JSON.stringify(updatedNotes));
                return updatedNotes;
            });
            setNote('');
        }
    };
    const deleteNote = (indexToDelete: number) => {
        setNotes(prevNotes => {
            const updatedNotes = prevNotes.filter((_, index) => index !== indexToDelete);
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return updatedNotes;
        });
    };
    return (
        <div className="note-box">
            <h4>Notes</h4>
            <div className='notes'>
                {notes.map((savedNote, index) => (
                    <div className='note-list' key={index}>
                        <button className='delete-btn' onClick={() => deleteNote(index)}>X</button>
                        <li>{savedNote}</li>
                    </div>
                ))}
                <div className='text'>
                    <textarea
                        placeholder="Note.."
                        value={note}
                        onChange={handleNoteChange}
                        rows={1}
                        cols={1}
                    ></textarea>
                    <div className='save' onClick={saveNote}>Save</div>
                </div>
            </div>
        </div>
    )
}
