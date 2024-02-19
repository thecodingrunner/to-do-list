import displayTask from "./displayTask";
import addToNotesObject from "./addToNotesObject";
import makeProjectObject from "./makeProjectObject";

let projectNum = 1;
let noteArrayDefault = [
  []
];
// Prevent submit page refresh defaults 
const form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// Prevent submit page refresh defaults form project form 
const projectForm = document.getElementById("projectForm");
projectForm.addEventListener('submit', handleForm);

// Create task button
const taskBtn = document.getElementById('taskBtn');
// Create project button 
const projectBtn = document.getElementById('projectBtn')
// Dialog form element 
const noteDialog = document.getElementById('noteDialog')
const projectDialog = document.getElementById('projectDialog')

// Note Form buttons
const closeForm = document.querySelector(".closeForm")
const confirmForm = document.querySelector(".submit")

// Project Form buttons
const closeProjectForm = document.querySelector(".closeProjectForm")
const confirmProjectForm = document.querySelector(".projectSubmit")

// Checking for the input elements
const title = document.getElementById('title')
const description = document.getElementById('description')
const date = document.getElementById('date')
const priority = document.getElementById('priority')

// PROJECT FORM

// Open task form on pressing of task button
projectBtn.addEventListener('click', () => {
  // addTask();
  // displayTask();
  projectDialog.showModal();
})

// close form on pressing of forms close or submit button
closeProjectForm.addEventListener('click', () => {
  projectDialog.close();
  console.log('test');
});

confirmProjectForm.addEventListener('click', () => {
  projectDialog.close();
  console.log(projectTitle.value);
  projectNum ++;
  noteArrayDefault.push([]);
  console.log(noteArrayDefault)
  console.log(projectNum)
  // create new array
  // let project1 = new makeProjectObject(projectTitle.value);
  // console.log(project1);
  // noteArrayDefault.push(project1);
  // console.log(noteArrayDefault)
});


// NOTE FORM 

// Open task form on pressing of task button
taskBtn.addEventListener('click', () => {
  // addTask();
  // displayTask();
  noteDialog.showModal();
})

// close form on pressing of forms close or submit button
closeForm.addEventListener('click', () => {
  noteDialog.close();
  console.log('test')
});

confirmForm.addEventListener('click', () => {
  noteDialog.close();
  console.log(title.value)
  console.log(description.value)
  console.log(date.value)
  console.log(priority.value)
  noteArrayDefault[1].push(new addToNotesObject(title.value,description.value,date.value,priority.value));
  // console.log(project1)
  // project1.note1 = note1;
  console.log(noteArrayDefault[projectNum-1]);
  displayTask(noteArrayDefault[projectNum-1], noteArrayDefault[projectNum-1].length-1);
});


// press new note button => display form => apply values of form to add task function => apply values to display Task function

// press new project button => create new array (popup to write a project name, add project to project list in sidebar)

// press new note button => display form => add values of form to current project array

// press on specific project link => display project in dashboard with heading and individual notes

// press on specific note in project dashboard => display popup with details of note 