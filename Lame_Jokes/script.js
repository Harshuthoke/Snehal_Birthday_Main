    // script.js
document.addEventListener('DOMContentLoaded', function () {
    const noteInput = document.getElementById('note-input');
    const addNoteButton = document.getElementById('add-note');
    const noteList = document.getElementById('note-list');
  
    addNoteButton.addEventListener('click', function () {
      const noteText = noteInput.value.trim();
  
      if (noteText !== '') {
        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = noteText;
        noteList.appendChild(note);
  
        // Clear the input field
        noteInput.value = '';
      }
    });
  });
  