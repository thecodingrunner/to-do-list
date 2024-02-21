export default function clearProject(noteData, title) {
  let project = document.getElementsByClassName(`${title}`);
  console.log(project)
  project[0].remove();
  delete noteData[title];
  console.log(noteData);
}