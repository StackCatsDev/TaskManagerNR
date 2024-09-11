document.addEventListener('DOMContentLoaded', () => {
    const nContainer = document.getElementById('npc');

    // Load saved notes from localStorage and display them
    const loadNotes = () => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        nContainer.innerHTML = savedNotes.map((note, index) => 
            `<div id="nContainer">
                <h3 id="nTitle">${note.title}</h3>
                <p id="nParagraph">${note.content}</p>
                <button id="remB" onclick="removeNoteInDisplay(${index})">Remove</button>
            </div>`
        ).join('');
    };

    loadNotes();

    // Remove note function
    window.removeNoteInDisplay = (index) => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        savedNotes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(savedNotes));
        loadNotes();
    };
});

