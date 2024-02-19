import displayTask from "./displayTask";

// Prevent submit page refresh defaults 
const form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// Create task button
const taskBtn = document.getElementById('taskBtn');
// Dialog form element 
const dialog = document.querySelector('dialog')

// Form buttons
const closeForm = document.querySelector(".closeForm")
const confirmForm = document.querySelector(".submit")

// Checking for the input elements
const title = document.getElementById('title')
const description = document.getElementById('description')
const date = document.getElementById('date')
const priority = document.getElementById('priority')

// Open task form on pressing of task button
taskBtn.addEventListener('click', () => {
  // addTask();
  // displayTask();
  dialog.showModal();
})

// close form on pressing of forms close or submit button
closeForm.addEventListener('click', () => {
  dialog.close();
  console.log('test')
});

confirmForm.addEventListener('click', () => {
  dialog.close();
  console.log(title.value)
  console.log(description.value)
  console.log(date.value)
  console.log(priority.value)
});


// press button => display form => apply values of form to add task function => apply values to display Task function