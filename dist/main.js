/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addToNotesObject.js":
/*!*********************************!*\
  !*** ./src/addToNotesObject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addToNotesObject)
/* harmony export */ });
class addToNotesObject {
  constructor(title,description,date,priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

/***/ }),

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clear)
/* harmony export */ });
function clear() {
  const itemBox = document.querySelector('.itemBox');

  itemBox.innerHTML = '';
}

/***/ }),

/***/ "./src/clearProject.js":
/*!*****************************!*\
  !*** ./src/clearProject.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearProject)
/* harmony export */ });
function clearProject(noteData, title) {
  let project = document.getElementsByClassName(`${title}`);
  console.log(project)
  project[0].remove();
  delete noteData[title];
  console.log(noteData);
  localStorage.setItem('noteData', JSON.stringify(noteData));
}

/***/ }),

/***/ "./src/displayProject.js":
/*!*******************************!*\
  !*** ./src/displayProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayProject)
/* harmony export */ });
/* harmony import */ var _clearProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearProject */ "./src/clearProject.js");
/* harmony import */ var _displayTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTask */ "./src/displayTask.js");
/* harmony import */ var _selectProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectProject */ "./src/selectProject.js");




function displayProject(noteData, title) {
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
    ;(0,_clearProject__WEBPACK_IMPORTED_MODULE_0__["default"])(noteData, title)
    ;(0,_displayTask__WEBPACK_IMPORTED_MODULE_1__["default"])(noteData['default'])
    projectHeader.textContent = 'Default';
  })
}

/***/ }),

/***/ "./src/displayTask.js":
/*!****************************!*\
  !*** ./src/displayTask.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTask)
/* harmony export */ });
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ "./src/clear.js");
/* harmony import */ var _infoPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoPopup */ "./src/infoPopup.js");



function displayTask(array) {
  (0,_clear__WEBPACK_IMPORTED_MODULE_0__["default"])()
  let index = 0;
  for (let note of array) {
  const itemBox = document.querySelector('.itemBox')
  const noteCard = document.createElement('div')
  const noteTitle = document.createElement('div')
  const noteDescription = document.createElement('div')
  const noteDate = document.createElement('div')
  const notePriority = document.createElement('div')
  const deleteNote = document.createElement('input')
  
  noteTitle.textContent = note.title;
  noteDescription.textContent = 'description...';
  noteDate.textContent = note.date;
  notePriority.textContent = note.priority;
  deleteNote.type = 'checkbox';


  deleteNote.classList.add(index);
  index++;

  itemBox.appendChild(noteCard);
  noteCard.appendChild(noteTitle);
  noteCard.appendChild(noteDescription);
  noteCard.appendChild(noteDate);
  noteCard.appendChild(notePriority);
  noteCard.appendChild(deleteNote)

  noteCard.classList.add('listItem');

  deleteNote.addEventListener('change', (event) => {
    array.splice(event.target.className,1)
    displayTask(array)
    localStorage.setItem('noteData', JSON.stringify(noteData));
  })

  noteDescription.addEventListener('click', () => {
    ;(0,_infoPopup__WEBPACK_IMPORTED_MODULE_1__["default"])(note)
  })
}
}

/***/ }),

/***/ "./src/infoPopup.js":
/*!**************************!*\
  !*** ./src/infoPopup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ infoPopup)
/* harmony export */ });
function infoPopup(note) {
  const popup = document.createElement('div')
  const body = document.querySelector('.itemBox')

  const noteTitle = document.createElement('div')
  const noteDescription = document.createElement('div')
  const noteDate = document.createElement('div')
  const notePriority = document.createElement('div')
  const deleteNote = document.createElement('input')

  noteTitle.textContent = `Title: ${note.title}`;
  noteDescription.textContent = `Description: ${note.description}`;
  noteDate.textContent = `Date: ${note.date}`;
  notePriority.textContent = `Priority: ${note.priority}`;
  deleteNote.type = 'checkbox';

  body.appendChild(popup);
  popup.appendChild(deleteNote);
  popup.appendChild(noteTitle);
  popup.appendChild(notePriority);
  popup.appendChild(noteDate);
  popup.appendChild(noteDescription);

  popup.classList.add('infoPopup');

  deleteNote.addEventListener('change', (event) => {
    popup.remove();
  })
}

/***/ }),

/***/ "./src/makeProjectObject.js":
/*!**********************************!*\
  !*** ./src/makeProjectObject.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeProjectObject)
/* harmony export */ });
class makeProjectObject {
  constructor (title) {
    this.title = title;
  }
}

/***/ }),

/***/ "./src/selectProject.js":
/*!******************************!*\
  !*** ./src/selectProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ selectProject)
/* harmony export */ });
function selectProject(title) {
  const projectHeader = document.querySelector('.projectName');
  projectHeader.textContent = title;
  // const projectTitle = document.querySelector(`.${title}`)
  // console.log(projectTitle)
  // projectTitle.classList.toggle('highlight')
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTask */ "./src/displayTask.js");
/* harmony import */ var _addToNotesObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToNotesObject */ "./src/addToNotesObject.js");
/* harmony import */ var _makeProjectObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeProjectObject */ "./src/makeProjectObject.js");
/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayProject */ "./src/displayProject.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clear */ "./src/clear.js");
/* harmony import */ var _selectProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectProject */ "./src/selectProject.js");







console.log(JSON.parse(localStorage.getItem("noteData")).default);
// Make Note Data object with initial default project element
if (JSON.parse(localStorage.getItem("noteData")).default === undefined || !localStorage.getItem("noteData")) {
  let noteDatas = {
    default: [],
  };
  localStorage.setItem("noteData", JSON.stringify(noteDatas));
}

let noteData = JSON.parse(localStorage.getItem("noteData"));

function displayNoteData() {
  Object.keys(noteData).forEach((key) => {
    (0,_displayProject__WEBPACK_IMPORTED_MODULE_3__["default"])(noteData, key)
  })
}

displayNoteData()

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
  noteData[currentProject].push(new _addToNotesObject__WEBPACK_IMPORTED_MODULE_1__["default"](title.value,description.value,date.value,priority.value));
  (0,_displayTask__WEBPACK_IMPORTED_MODULE_0__["default"])(noteData[currentProject]);
  localStorage.setItem('noteData', JSON.stringify(noteData));
  console.log(JSON.parse(localStorage.getItem("noteData")));
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
  (0,_displayProject__WEBPACK_IMPORTED_MODULE_3__["default"])(noteData, projectTitle.value);
  // displayProjects(noteData);
  (0,_clear__WEBPACK_IMPORTED_MODULE_4__["default"])();
  projectList = document.querySelectorAll('.projects > li')
  localStorage.setItem('noteData', JSON.stringify(noteData));
  console.log(JSON.parse(localStorage.getItem("noteData")));
});

// select project from list
let projectList = document.querySelectorAll('.projects > li')
const projects = document.querySelector('.projects')
projects.addEventListener('click', () => {
  projectList.forEach((project) => {
    project.addEventListener('click', (event) => {
      currentProject = event.target.className;
      (0,_displayTask__WEBPACK_IMPORTED_MODULE_0__["default"])(noteData[event.target.className]);
      (0,_selectProject__WEBPACK_IMPORTED_MODULE_5__["default"])(event.target.className);
    })
})
})

// clear button

const clearBtn = document.getElementById("clearBtn")
clearBtn.addEventListener('click', () => {
  ;(0,_clear__WEBPACK_IMPORTED_MODULE_4__["default"])();
})


const todayBtn = document.querySelector('.today');
todayBtn.addEventListener('click', () => {
  let today = [];
  Object.keys(noteData).forEach(key => {
    const value = noteData[key];
    for (let i = 0; i < value.length; i++) {
      if (value[i].date == new Date().toJSON().slice(0, 10)) {
      today.push(value[i]);
    }
  }
});
(0,_selectProject__WEBPACK_IMPORTED_MODULE_5__["default"])('Today')
;(0,_displayTask__WEBPACK_IMPORTED_MODULE_0__["default"])(today)
})


const urgentBtn = document.querySelector('.urgent');
urgentBtn.addEventListener('click', () => {
  let urgent = [];
  Object.keys(noteData).forEach(key => {
    const value = noteData[key];
    for (let i = 0; i < value.length; i++) {
      if (value[i].priority == 1) {
      urgent.push(value[i]);
    }
  }
});
(0,_selectProject__WEBPACK_IMPORTED_MODULE_5__["default"])('Urgent')
;(0,_displayTask__WEBPACK_IMPORTED_MODULE_0__["default"])(urgent)
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhO0FBQ25CLEtBQUs7QUFDTCxDQUFDO0FBQ0QsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxtREFBSztBQUNQLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDBEQUFhO0FBQ2IseURBQVk7QUFDWixDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCwwREFBYTtBQUNiLHlEQUFZO0FBQ1osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0RBQStEO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3RiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkVG9Ob3Rlc09iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NsZWFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2xlYXJQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGlzcGxheVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZm9Qb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21ha2VQcm9qZWN0T2JqZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2VsZWN0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBhZGRUb05vdGVzT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhcigpIHtcbiAgY29uc3QgaXRlbUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtQm94Jyk7XG5cbiAgaXRlbUJveC5pbm5lckhUTUwgPSAnJztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhclByb2plY3Qobm90ZURhdGEsIHRpdGxlKSB7XG4gIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aXRsZX1gKTtcbiAgY29uc29sZS5sb2cocHJvamVjdClcbiAgcHJvamVjdFswXS5yZW1vdmUoKTtcbiAgZGVsZXRlIG5vdGVEYXRhW3RpdGxlXTtcbiAgY29uc29sZS5sb2cobm90ZURhdGEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZURhdGEnLCBKU09OLnN0cmluZ2lmeShub3RlRGF0YSkpO1xufSIsImltcG9ydCBjbGVhclByb2plY3QgZnJvbSBcIi4vY2xlYXJQcm9qZWN0XCI7XG5pbXBvcnQgZGlzcGxheU5vdGUgZnJvbSBcIi4vZGlzcGxheVRhc2tcIlxuaW1wb3J0IHNlbGVjdFByb2plY3QgZnJvbSBcIi4vc2VsZWN0UHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdChub3RlRGF0YSwgdGl0bGUpIHtcbiAgbGV0IHByb2plY3RCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEJhcicpO1xuICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSB0aXRsZTsgIFxuICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKHRpdGxlKTtcbiAgcHJvamVjdEJhci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gIGxldCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3ROYW1lJyk7XG4gIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgY29uc29sZS5sb2cocHJvamVjdEJhcilcbiAgbGV0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxCdG4uaW5uZXJUZXh0ID0gJ2RlbGV0ZSc7XG4gIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gIC8vIGRlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGl0bGV9YCk7XG4gIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnY2hlY2snKVxuICAgIGNsZWFyUHJvamVjdChub3RlRGF0YSwgdGl0bGUpXG4gICAgZGlzcGxheU5vdGUobm90ZURhdGFbJ2RlZmF1bHQnXSlcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ0RlZmF1bHQnO1xuICB9KVxufSIsImltcG9ydCBjbGVhciBmcm9tIFwiLi9jbGVhclwiO1xuaW1wb3J0IGluZm9Qb3B1cCBmcm9tIFwiLi9pbmZvUG9wdXBcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5VGFzayhhcnJheSkge1xuICBjbGVhcigpXG4gIGxldCBpbmRleCA9IDA7XG4gIGZvciAobGV0IG5vdGUgb2YgYXJyYXkpIHtcbiAgY29uc3QgaXRlbUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtQm94JylcbiAgY29uc3Qgbm90ZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBub3RlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBub3RlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IG5vdGVQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGRlbGV0ZU5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIFxuICBub3RlVGl0bGUudGV4dENvbnRlbnQgPSBub3RlLnRpdGxlO1xuICBub3RlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnZGVzY3JpcHRpb24uLi4nO1xuICBub3RlRGF0ZS50ZXh0Q29udGVudCA9IG5vdGUuZGF0ZTtcbiAgbm90ZVByaW9yaXR5LnRleHRDb250ZW50ID0gbm90ZS5wcmlvcml0eTtcbiAgZGVsZXRlTm90ZS50eXBlID0gJ2NoZWNrYm94JztcblxuXG4gIGRlbGV0ZU5vdGUuY2xhc3NMaXN0LmFkZChpbmRleCk7XG4gIGluZGV4Kys7XG5cbiAgaXRlbUJveC5hcHBlbmRDaGlsZChub3RlQ2FyZCk7XG4gIG5vdGVDYXJkLmFwcGVuZENoaWxkKG5vdGVUaXRsZSk7XG4gIG5vdGVDYXJkLmFwcGVuZENoaWxkKG5vdGVEZXNjcmlwdGlvbik7XG4gIG5vdGVDYXJkLmFwcGVuZENoaWxkKG5vdGVEYXRlKTtcbiAgbm90ZUNhcmQuYXBwZW5kQ2hpbGQobm90ZVByaW9yaXR5KTtcbiAgbm90ZUNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlTm90ZSlcblxuICBub3RlQ2FyZC5jbGFzc0xpc3QuYWRkKCdsaXN0SXRlbScpO1xuXG4gIGRlbGV0ZU5vdGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgYXJyYXkuc3BsaWNlKGV2ZW50LnRhcmdldC5jbGFzc05hbWUsMSlcbiAgICBkaXNwbGF5VGFzayhhcnJheSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZURhdGEnLCBKU09OLnN0cmluZ2lmeShub3RlRGF0YSkpO1xuICB9KVxuXG4gIG5vdGVEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpbmZvUG9wdXAobm90ZSlcbiAgfSlcbn1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmZvUG9wdXAobm90ZSkge1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbUJveCcpXG5cbiAgY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3Qgbm90ZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3Qgbm90ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBub3RlUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBkZWxldGVOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXG4gIG5vdGVUaXRsZS50ZXh0Q29udGVudCA9IGBUaXRsZTogJHtub3RlLnRpdGxlfWA7XG4gIG5vdGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtub3RlLmRlc2NyaXB0aW9ufWA7XG4gIG5vdGVEYXRlLnRleHRDb250ZW50ID0gYERhdGU6ICR7bm90ZS5kYXRlfWA7XG4gIG5vdGVQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtub3RlLnByaW9yaXR5fWA7XG4gIGRlbGV0ZU5vdGUudHlwZSA9ICdjaGVja2JveCc7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKGRlbGV0ZU5vdGUpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChub3RlVGl0bGUpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChub3RlUHJpb3JpdHkpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChub3RlRGF0ZSk7XG4gIHBvcHVwLmFwcGVuZENoaWxkKG5vdGVEZXNjcmlwdGlvbik7XG5cbiAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnaW5mb1BvcHVwJyk7XG5cbiAgZGVsZXRlTm90ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICBwb3B1cC5yZW1vdmUoKTtcbiAgfSlcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBtYWtlUHJvamVjdE9iamVjdCB7XG4gIGNvbnN0cnVjdG9yICh0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbGVjdFByb2plY3QodGl0bGUpIHtcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TmFtZScpO1xuICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIC8vIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RpdGxlfWApXG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RUaXRsZSlcbiAgLy8gcHJvamVjdFRpdGxlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZ2hsaWdodCcpXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGlzcGxheU5vdGVzIGZyb20gXCIuL2Rpc3BsYXlUYXNrXCI7XG5pbXBvcnQgYWRkVG9Ob3Rlc09iamVjdCBmcm9tIFwiLi9hZGRUb05vdGVzT2JqZWN0XCI7XG5pbXBvcnQgbWFrZVByb2plY3RPYmplY3QgZnJvbSBcIi4vbWFrZVByb2plY3RPYmplY3RcIjtcbmltcG9ydCBkaXNwbGF5UHJvamVjdCBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xuaW1wb3J0IGNsZWFyIGZyb20gXCIuL2NsZWFyXCI7XG5pbXBvcnQgc2VsZWN0UHJvamVjdCBmcm9tIFwiLi9zZWxlY3RQcm9qZWN0XCI7XG5cbmNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJub3RlRGF0YVwiKSkuZGVmYXVsdCk7XG4vLyBNYWtlIE5vdGUgRGF0YSBvYmplY3Qgd2l0aCBpbml0aWFsIGRlZmF1bHQgcHJvamVjdCBlbGVtZW50XG5pZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vdGVEYXRhXCIpKS5kZWZhdWx0ID09PSB1bmRlZmluZWQgfHwgIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibm90ZURhdGFcIikpIHtcbiAgbGV0IG5vdGVEYXRhcyA9IHtcbiAgICBkZWZhdWx0OiBbXSxcbiAgfTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJub3RlRGF0YVwiLCBKU09OLnN0cmluZ2lmeShub3RlRGF0YXMpKTtcbn1cblxubGV0IG5vdGVEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vdGVEYXRhXCIpKTtcblxuZnVuY3Rpb24gZGlzcGxheU5vdGVEYXRhKCkge1xuICBPYmplY3Qua2V5cyhub3RlRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgZGlzcGxheVByb2plY3Qobm90ZURhdGEsIGtleSlcbiAgfSlcbn1cblxuZGlzcGxheU5vdGVEYXRhKClcblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gJ2RlZmF1bHQnO1xubGV0IGNsYXNzTnVtID0gMDtcblxuXG5cbi8vIE5PVEUgRk9STSBcblxuLy8gQ3JlYXRlIHRhc2sgYnV0dG9uXG5jb25zdCB0YXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tCdG4nKTtcbi8vIERpYWxvZyBmb3JtIGVsZW1lbnQgXG5jb25zdCBub3RlRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVEaWFsb2cnKVxuLy8gTm90ZSBGb3JtIGJ1dHRvbnNcbmNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VGb3JtXCIpXG5jb25zdCBjb25maXJtRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0XCIpXG4vLyBQcmV2ZW50IHN1Ym1pdCBwYWdlIHJlZnJlc2ggZGVmYXVsdHMgKG5vdGUpXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xuZnVuY3Rpb24gaGFuZGxlRm9ybShldmVudCkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9IFxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtKTtcbi8vIENoZWNraW5nIGZvciB0aGUgaW5wdXQgZWxlbWVudHNcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJylcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJylcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpXG5jb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpXG5cbi8vIE9wZW4gdGFzayBmb3JtIG9uIHByZXNzaW5nIG9mIHRhc2sgYnV0dG9uXG50YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBub3RlRGlhbG9nLnNob3dNb2RhbCgpO1xufSlcblxuLy8gY2xvc2UgZm9ybSBvbiBwcmVzc2luZyBvZiBmb3JtcyBjbG9zZSBvciBzdWJtaXQgYnV0dG9uXG5jbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5vdGVEaWFsb2cuY2xvc2UoKTtcbn0pO1xuXG4vLyBvbiBwcmVzc2luZyBzdWJtaXQgYnV0dG9uLCBjbG9zZSBkaWFsb2cgYW5kIGFkZCB0aGUgYXJyYXkgdG8gdGhlIGN1cnJlbnQgcHJvamVjdFxuY29uZmlybUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5vdGVEaWFsb2cuY2xvc2UoKTtcbiAgbm90ZURhdGFbY3VycmVudFByb2plY3RdLnB1c2gobmV3IGFkZFRvTm90ZXNPYmplY3QodGl0bGUudmFsdWUsZGVzY3JpcHRpb24udmFsdWUsZGF0ZS52YWx1ZSxwcmlvcml0eS52YWx1ZSkpO1xuICBkaXNwbGF5Tm90ZXMobm90ZURhdGFbY3VycmVudFByb2plY3RdKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vdGVEYXRhJywgSlNPTi5zdHJpbmdpZnkobm90ZURhdGEpKTtcbiAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vdGVEYXRhXCIpKSk7XG59KTtcblxuXG5cblxuLy8gUFJPSkVDVCBGT1JNXG5cbi8vIENyZWF0ZSBwcm9qZWN0IGJ1dHRvbiBcbmNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEJ0bicpXG4vLyBEaWFsb2cgcHJvamVjdCBlbGVtZW50IFxuY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGlhbG9nJylcbi8vIFByb2plY3QgRm9ybSBidXR0b25zXG5jb25zdCBjbG9zZVByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVByb2plY3RGb3JtXCIpXG5jb25zdCBjb25maXJtUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RTdWJtaXRcIilcbi8vIFByZXZlbnQgc3VibWl0IHBhZ2UgcmVmcmVzaCBkZWZhdWx0cyAocHJvamVjdClcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybVwiKTtcbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm0pO1xuXG5cbi8vIE9wZW4gcHJvamVjdCBmb3JtIG9uIHByZXNzaW5nIG9mIHRhc2sgYnV0dG9uXG5wcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xufSlcblxuLy8gY2xvc2UgZm9ybSBvbiBwcmVzc2luZyBvZiBmb3JtcyBjbG9zZSBvciBzdWJtaXQgYnV0dG9uXG5jbG9zZVByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG59KTtcblxuY29uZmlybVByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG4gIG5vdGVEYXRhW3Byb2plY3RUaXRsZS52YWx1ZV0gPSBbXTtcbiAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0VGl0bGUudmFsdWU7XG4gIGRpc3BsYXlQcm9qZWN0KG5vdGVEYXRhLCBwcm9qZWN0VGl0bGUudmFsdWUpO1xuICAvLyBkaXNwbGF5UHJvamVjdHMobm90ZURhdGEpO1xuICBjbGVhcigpO1xuICBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0cyA+IGxpJylcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vdGVEYXRhJywgSlNPTi5zdHJpbmdpZnkobm90ZURhdGEpKTtcbiAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vdGVEYXRhXCIpKSk7XG59KTtcblxuLy8gc2VsZWN0IHByb2plY3QgZnJvbSBsaXN0XG5sZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHMgPiBsaScpXG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG5wcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZTtcbiAgICAgIGRpc3BsYXlOb3Rlcyhub3RlRGF0YVtldmVudC50YXJnZXQuY2xhc3NOYW1lXSk7XG4gICAgICBzZWxlY3RQcm9qZWN0KGV2ZW50LnRhcmdldC5jbGFzc05hbWUpO1xuICAgIH0pXG59KVxufSlcblxuLy8gY2xlYXIgYnV0dG9uXG5cbmNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGVhckJ0blwiKVxuY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNsZWFyKCk7XG59KVxuXG5cbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbGV0IHRvZGF5ID0gW107XG4gIE9iamVjdC5rZXlzKG5vdGVEYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBub3RlRGF0YVtrZXldO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZVtpXS5kYXRlID09IG5ldyBEYXRlKCkudG9KU09OKCkuc2xpY2UoMCwgMTApKSB7XG4gICAgICB0b2RheS5wdXNoKHZhbHVlW2ldKTtcbiAgICB9XG4gIH1cbn0pO1xuc2VsZWN0UHJvamVjdCgnVG9kYXknKVxuZGlzcGxheU5vdGVzKHRvZGF5KVxufSlcblxuXG5jb25zdCB1cmdlbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXJnZW50Jyk7XG51cmdlbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxldCB1cmdlbnQgPSBbXTtcbiAgT2JqZWN0LmtleXMobm90ZURhdGEpLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IG5vdGVEYXRhW2tleV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlW2ldLnByaW9yaXR5ID09IDEpIHtcbiAgICAgIHVyZ2VudC5wdXNoKHZhbHVlW2ldKTtcbiAgICB9XG4gIH1cbn0pO1xuc2VsZWN0UHJvamVjdCgnVXJnZW50JylcbmRpc3BsYXlOb3Rlcyh1cmdlbnQpXG59KVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBwcm9qZWN0KCkgeyBcbi8vICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHMgPiBsaScpXG4vLyAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbi8vICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBjdXJyZW50UHJvamVjdCA9IEFycmF5LmZyb20ocHJvamVjdExpc3QpLmluZGV4T2YocHJvamVjdCk7XG4vLyAgICAgY2xlYXIoKVxuLy8gICAgIGlmIChub3RlRGF0YVtBcnJheS5mcm9tKHByb2plY3RMaXN0KS5pbmRleE9mKHByb2plY3QpXS5sZW5ndGggPT09IDApIHJldHVybjtcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVEYXRhW0FycmF5LmZyb20ocHJvamVjdExpc3QpLmluZGV4T2YocHJvamVjdCldLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICBkaXNwbGF5VGFzayhub3RlRGF0YVtBcnJheS5mcm9tKHByb2plY3RMaXN0KS5pbmRleE9mKHByb2plY3QpXSwgaSwgY2xhc3NOdW0pXG4vLyAgICAgfVxuLy8gICB9XG4vLyApXG4vLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdClcbi8vIH0pXG4vLyB9XG5cblxuXG4vLyBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4vLyBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgcHJvamVjdCgpO1xuLy8gfSlcblxuXG4vLyAvLyBwcmVzcyBuZXcgbm90ZSBidXR0b24gPT4gZGlzcGxheSBmb3JtID0+IGFwcGx5IHZhbHVlcyBvZiBmb3JtIHRvIGFkZCB0YXNrIGZ1bmN0aW9uID0+IGFwcGx5IHZhbHVlcyB0byBkaXNwbGF5IFRhc2sgZnVuY3Rpb25cblxuLy8gLy8gcHJlc3MgbmV3IHByb2plY3QgYnV0dG9uID0+IGNyZWF0ZSBuZXcgYXJyYXkgKHBvcHVwIHRvIHdyaXRlIGEgcHJvamVjdCBuYW1lLCBhZGQgcHJvamVjdCB0byBwcm9qZWN0IGxpc3QgaW4gc2lkZWJhcilcblxuLy8gLy8gcHJlc3MgbmV3IG5vdGUgYnV0dG9uID0+IGRpc3BsYXkgZm9ybSA9PiBhZGQgdmFsdWVzIG9mIGZvcm0gdG8gY3VycmVudCBwcm9qZWN0IGFycmF5XG5cbi8vIC8vIHByZXNzIG9uIHNwZWNpZmljIHByb2plY3QgbGluayA9PiBkaXNwbGF5IHByb2plY3QgaW4gZGFzaGJvYXJkIHdpdGggaGVhZGluZyBhbmQgaW5kaXZpZHVhbCBub3Rlc1xuXG4vLyAvLyBwcmVzcyBvbiBzcGVjaWZpYyBub3RlIGluIHByb2plY3QgZGFzaGJvYXJkID0+IGRpc3BsYXkgcG9wdXAgd2l0aCBkZXRhaWxzIG9mIG5vdGUgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9