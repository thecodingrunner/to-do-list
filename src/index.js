import displayNotes from "./displayTask";
import addToNotesObject from "./addToNotesObject";
import makeProjectObject from "./makeProjectObject";
import displayProject from "./displayProject";
import clear from "./clear"
import selectProject from "./selectProject"

// Make Note Data object with initial default project element
let noteData = {
  default: [],
};


let currentProject = 'default';
let classNum = 0;






// NOTE FORM 

// Create task button
const taskBtn = document.getElementById('taskBtn');
// Dialog form element 
const noteDialog = document.getElementById('noteDialog')
// Note Form buttons
const closeForm = document.querySelector(".closeForm")
const confirmForm = document.querySelector(".submit")
// Prevent submit page refresh defaults (note)
const form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
// Checking for the input elements
const title = document.getElementById('title')
const description = document.getElementById('description')
const date = document.getElementById('date')
const priority = document.getElementById('priority')

// Open task form on pressing of task button
taskBtn.addEventListener('click', () => {
  noteDialog.showModal();
})

// close form on pressing of forms close or submit button
closeForm.addEventListener('click', () => {
  noteDialog.close();
});

// on pressing submit button, close dialog and add the array to the current project
confirmForm.addEventListener('click', () => {
  noteDialog.close();
  noteData[currentProject].push(new addToNotesObject(title.value,description.value,date.value,priority.value));
  console.log(noteData)
  displayNotes(noteData, currentProject);
});




// PROJECT FORM

// Create project button 
const projectBtn = document.getElementById('projectBtn')
// Dialog project element 
const projectDialog = document.getElementById('projectDialog')
// Project Form buttons
const closeProjectForm = document.querySelector(".closeProjectForm")
const confirmProjectForm = document.querySelector(".projectSubmit")
// Prevent submit page refresh defaults (project)
const projectForm = document.getElementById("projectForm");
projectForm.addEventListener('submit', handleForm);


// Open project form on pressing of task button
projectBtn.addEventListener('click', () => {
  projectDialog.showModal();
})

// close form on pressing of forms close or submit button
closeProjectForm.addEventListener('click', () => {
  projectDialog.close();
});

confirmProjectForm.addEventListener('click', () => {
  projectDialog.close();
  noteData[projectTitle.value] = [];
  currentProject = projectTitle.value;
  displayProject(projectTitle.value);
  clear();
  projectList = document.querySelectorAll('.projects > li')
  console.log(projectList);
});

// select project from list
let projectList = document.querySelectorAll('.projects > li')
const projects = document.querySelector('.projects')
projects.addEventListener('click', () => {
  projectList.forEach((project) => {
    console.log(project)
    project.addEventListener('click', (event) => {
      console.log(event.target.className);
      currentProject = event.target.className;
      displayNotes(noteData, event.target.className);
      selectProject(event.target.className);
    })
})
})

// clear button

const clearBtn = document.getElementById("clearBtn")
clearBtn.addEventListener('click', () => {
  console.log(noteData[currentProject] = []);
  clear();
})


// function project() { 
//   const projectList = document.querySelectorAll('.projects > li')
//   projectList.forEach((project) => {
//   project.addEventListener('click', () => {
//     currentProject = Array.from(projectList).indexOf(project);
//     clear()
//     if (noteData[Array.from(projectList).indexOf(project)].length === 0) return;
//     for (let i = 0; i < noteData[Array.from(projectList).indexOf(project)].length; i++) {
//       displayTask(noteData[Array.from(projectList).indexOf(project)], i, classNum)
//     }
//   }
// )
// console.log(currentProject)
// })
// }



// const projects = document.querySelector('.projects')
// projects.addEventListener('click', () => {
//   project();
// })


// // press new note button => display form => apply values of form to add task function => apply values to display Task function

// // press new project button => create new array (popup to write a project name, add project to project list in sidebar)

// // press new note button => display form => add values of form to current project array

// // press on specific project link => display project in dashboard with heading and individual notes

// // press on specific note in project dashboard => display popup with details of note 