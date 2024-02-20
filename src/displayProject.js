export default function displayProject(title) {
  const projectBar = document.getElementById('projectBar');
  const projectName = document.createElement('li');
  projectName.innerText = title;  
  projectName.classList.add(title);
  projectBar.appendChild(projectName);
  const projectHeader = document.querySelector('.projectName');
  projectHeader.textContent = title;
  console.log(projectBar)
}