export default function displayTask(array, index) {
  const itemBox = document.querySelector('.itemBox')
  const noteCard = document.createElement('div')
  const noteTitle = document.createElement('div')
  const noteDescription = document.createElement('div')
  const noteDate = document.createElement('div')
  const notePriority = document.createElement('div')
  
  noteTitle.textContent = array[index].title;
  noteDescription.textContent = array[index].description;
  noteDate.textContent = array[index].date;
  notePriority.textContent = array[index].priority;

  itemBox.appendChild(noteCard);
  noteCard.appendChild(noteTitle);
  noteCard.appendChild(noteDescription);
  noteCard.appendChild(noteDate);
  noteCard.appendChild(notePriority);

  noteCard.classList.add('listItem');
}