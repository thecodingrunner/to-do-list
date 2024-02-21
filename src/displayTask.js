import clear from "./clear";
import infoPopup from "./infoPopup"

export default function displayTask(array) {
  clear()
  let index = 0;
  for (let note of array) {
  const itemBox = document.querySelector('.itemBox')
  const noteCard = document.createElement('div')
  const noteTitle = document.createElement('div')
  const noteDescription = document.createElement('div')
  const noteDate = document.createElement('div')
  const notePriority = document.createElement('div')
  const deleteNote = document.createElement('input')
  
  noteTitle.textContent = note.title;
  noteDescription.textContent = 'description...';
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
    array.splice(event.target.className,1)
    displayTask(array)
  })

  noteDescription.addEventListener('click', () => {
    infoPopup(note)
  })
}
}