export default function infoPopup(note) {
  const popup = document.createElement('div')
  const body = document.querySelector('.itemBox')

  const noteTitle = document.createElement('div')
  const noteDescription = document.createElement('div')
  const noteDate = document.createElement('div')
  const notePriority = document.createElement('div')
  const deleteNote = document.createElement('input')

  noteTitle.textContent = `Title: ${note.title}`;
  noteDescription.textContent = `Description: ${note.description}`;
  noteDate.textContent = `Date: ${note.date}`;
  notePriority.textContent = `Priority: ${note.priority}`;
  deleteNote.type = 'checkbox';

  body.appendChild(popup);
  popup.appendChild(deleteNote);
  popup.appendChild(noteTitle);
  popup.appendChild(notePriority);
  popup.appendChild(noteDate);
  popup.appendChild(noteDescription);

  popup.classList.add('infoPopup');

  deleteNote.addEventListener('change', (event) => {
    popup.remove();
  })
}