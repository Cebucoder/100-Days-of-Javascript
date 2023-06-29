let showOverlay = document.getElementById('note-container');

function addBtn(){
    showOverlay.classList.add('show-overlay');
}



const noteForm = document.getElementById('note-form');
const noteInput = document.getElementById('note-input');
const noteList = document.getElementById('note-list');
const noteTitle = document.getElementById('note-title');

let notes = [];
let backgroundColors = [];

function createNote(){
    const noteText = noteInput.value.trim();
    const headTitle = noteTitle.value;

    if (noteText !== ''){
        if (noteTitle === ''){
            // adding deafult titel if user did not add note title
            noteTitle.value = 'My Note';
        }

        const note = {
            id: Date.now(),
            text: noteText,
            Title: headTitle
        };

        notes.push(note);
        noteInput.value = '';
        noteTitle.value = 'My Note';


        renderNotes();    
    }
}


function getNextColor(){
    const colors = ['#FF7EB9', '#FEFF9C','#7AFCFF','#FFF640'];
    const color = colors[backgroundColors.length % colors.length];
    return color;
}




function renderNotes(){
    noteList.innerHTML = '';

    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.className = 'note-item';
        const backgroundColor = backgroundColors[index] || getNextColor();
        li.style.backgroundColor = backgroundColor;
        li.innerHTML = `
        
        <span class="note-title-id" id="note-title">${note.Title}</span>
        <textarea readonly class="note-text">${note.text}</textarea>
        <span class="delete-btn" onclick="deleteNote(${note.id})">&plus;</span>
        
        `;
        noteList.prepend(li);

        backgroundColors[index] = backgroundColor;
    });
}

noteForm.addEventListener('submit', function(event){
    event.preventDefault(); /*to prevent page reload after submit*/
    showOverlay.classList.remove('show-overlay');
    createNote();
});

function deleteNote(id){
    const index = notes.findIndex(note => note.id === id);
    if(index !== -1){
        notes.splice(index, 1);
        backgroundColors.splice(index, 1);
        renderNotes();
    }
}

// now lest add background to the notes