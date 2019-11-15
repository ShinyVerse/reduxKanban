// ------ HTML references ------
let taskList = document.getElementById('to-do-tasks');
let addTaskForm = document.getElementById('add-task');
let addTaskTitle = addNoteForm['title'];
let addTaskDescription = addNoteForm['description'];
let addTaskPoints = addNoteForm['points'];

// ------ Redux ------
function deleteNote(index) {

  // console.log(index);
}

function renderNotes() {
  setDeleteNoteButtonsEventListeners();
}

// ------ Event Listeners ------
addNoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // console.log('Title:', addNoteTitle.value, 'Content:', addNoteContent.value);
});

function setDeleteNoteButtonsEventListeners() {
  let buttons = document.querySelectorAll('add-todo-task');

  for(let button of buttons) {
    button.addEventListener('click', () => {
      deleteNote(button.dataset.uuid);
    });
  }
}

// ------ Render the initial Notes ------
renderNotes();
