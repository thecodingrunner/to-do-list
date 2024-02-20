import displayTask from "./displayTask";
import addToNotesObject from "./addToNotesObject";
import makeProjectObject from "./makeProjectObject";
import displayProject from "./displayProject";
import clear from "./clear"


let projectNum = 1;
let noteArrayDefault = [
  []
];
let currentProject = 0;
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
  projectNum ++;
  noteArrayDefault.push([]);
  displayProject(projectTitle.value);
  project();
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
  console.log(currentProject)
  noteArrayDefault[currentProject].push(new addToNotesObject(title.value,description.value,date.value,priority.value));
  // console.log(project1)
  // project1.note1 = note1;
  console.log(noteArrayDefault[currentProject]);
});


function project() { 
  const projectList = document.querySelectorAll('.projects > li')
  projectList.forEach((project) => {
  project.addEventListener('click', (event) => {
    clear()
    if (noteArrayDefault[Array.from(projectList).indexOf(project)].length === 0) return;
    for (let i = 0; i < noteArrayDefault[Array.from(projectList).indexOf(project)].length; i++) {
      displayTask(noteArrayDefault[Array.from(projectList).indexOf(project)], i)
    }
  }
)
currentProject = Array.from(projectList).indexOf(project);
console.log(currentProject)
})
}

const clearBtn = document.getElementById("clearBtn")
clearBtn.addEventListener('click', () => {
  clear();
})

const projects = document.querySelector('.projects')
projects.addEventListener('click', () => {
  // const projectList = document.querySelectorAll('.projects > li')
  // projectList.forEach((project) => {
  //   project.addEventListener('click', (event) => {
  //   currentProject = Array.from(projectList).indexOf(project)
  //   console.log(currentProject)
  //   })
  // })
  project();
})




// press new note button => display form => apply values of form to add task function => apply values to display Task function

// press new project button => create new array (popup to write a project name, add project to project list in sidebar)

// press new note button => display form => add values of form to current project array

// press on specific project link => display project in dashboard with heading and individual notes

// press on specific note in project dashboard => display popup with details of note 