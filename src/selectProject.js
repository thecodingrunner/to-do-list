export default function selectProject(title) {
  const projectHeader = document.querySelector('.projectName');
  projectHeader.textContent = title;
  const projectTitle = document.querySelector(`.${title}`)
  console.log(projectTitle)
  projectTitle.classList.toggle('highlight')
}