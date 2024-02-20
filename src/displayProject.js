export default function displayProject(title) {
  const projectBar = document.getElementById('projectBar');
  const projectName = document.createElement('li');
  projectName.innerText = title;
  projectBar.appendChild(projectName);
  // projectName.classList.add(title);
  const projectHeader = document.querySelector('.projectName');
  projectHeader.textContent = title;
}