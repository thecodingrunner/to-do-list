import clearProject from "./clearProject";
import displayNote from "./displayTask"
import selectProject from "./selectProject";

export default function displayProject(noteData, title) {
  let projectBar = document.getElementById('projectBar');
  let projectName = document.createElement('li');
  projectName.innerText = title;  
  projectName.classList.add(title);
  projectBar.appendChild(projectName);
  let projectHeader = document.querySelector('.projectName');
  projectHeader.textContent = title;
  console.log(projectBar)
  let delBtn = document.createElement('button');
  delBtn.innerText = 'delete';
  projectName.appendChild(delBtn);
  // delBtn.setAttribute('id', `${title}`);
  delBtn.addEventListener('click', () => {
    console.log('check')
    clearProject(noteData, title)
    displayNote(noteData['default'])
    projectHeader.textContent = 'Default';
  })
}