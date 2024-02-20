import clear from "./clear";

export default function displayTask(noteData, key) {
  clear()
  let index = 0;
  for (let note of noteData[key]) {
  const itemBox = document.querySelector('.itemBox')
  const noteCard = document.createElement('div')
  const noteTitle = document.createElement('div')
  const noteDescription = document.createElement('div')
  const noteDate = document.createElement('div')
  const notePriority = document.createElement('div')
  const deleteNote = document.createElement('input')
  
  noteTitle.textContent = note.title;
  noteDescription.textContent = note.description;
  noteDate.textContent = note.date;
  notePriority.textContent = note.priority;
  deleteNote.type = 'checkbox';


  deleteNote.classList.add(index);
  index++;

  itemBox.appendChild(noteCard);
  noteCard.appendChild(noteTitle);
  noteCard.appendChild(noteDescription);
  noteCard.appendChild(noteDate);
  noteCard.appendChild(notePriority);
  noteCard.appendChild(deleteNote)

  noteCard.classList.add('listItem');

  deleteNote.addEventListener('change', (event) => {
    noteData[key].splice(event.target.className,1)
    displayTask(noteData, key)
  })
}
}