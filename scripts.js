document.addEventListener('DOMContentLoaded', () => {
    const noteTitle = document.getElementById('noteTitle');
    const noteInput = document.getElementById('noteInput');
    const saveButton = document.getElementById('saveButton');
    const notesContainer = document.getElementById('notesContainer');

    // Save note to localStorage
    const saveNote = () => {
        const title = noteTitle.value.trim();
        const content = noteInput.value.trim();
        if (title && content) {
            const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
            savedNotes.push({ title, content });
            localStorage.setItem('notes', JSON.stringify(savedNotes));
            noteTitle.value = '';
            noteInput.value = '';
            setTimeout(history.back(), 1000);
        }
    };

    saveButton.addEventListener('click', saveNote);

    // Remove note function
    window.removeNoteInCreate = (index) => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        savedNotes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(savedNotes));
        setTimeout(history.back(), 1000);
    };
});



function exitb(){
    history.back();
}