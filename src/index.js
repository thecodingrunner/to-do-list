console.log('test')

import displayTask from "./displayTask";

const taskBtn = document.getElementById('taskBtn');

taskBtn.addEventListener('click', () => {
  // addTask();
  displayTask();
})

// press button => display form => apply values of form to add task function => apply values to display Task function