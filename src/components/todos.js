import store from '../store/store';
import { addTodoTask, removeTodoTask, addDoingTask } from '../actions/actions';

export default function Todos(){
  // ------ HTML references ------
  let taskList = document.getElementById('to-do-tasks');
  let addTaskForm = document.getElementById('add-task');
  let addTaskTitle = addTaskForm['title'];
  let addTaskDescription = addTaskForm['description'];
  let addTaskPoints = addTaskForm['points'];

  // ------ Redux ------
  function deleteNote(uuid) {
    store.dispatch(removeTodoTask(uuid))
    // console.log(index);
  }

  function promoteTaskToDoing(title, description, points) {
    store.dispatch(addDoingTask(title, description, points));
  }

  function renderTasks() {
    console.log(store.getState());
    let tasks = store.getState().tasks;

    taskList.innerHTML = '';

    tasks.map((task) => {
        let toDoListItem = `
          <li>
            <b>${task.title}</b>
            <button
              data-uuid="${task.uuid}"
              class='delete-todo-task'>delete</button>
            <br/>
            <span>${task.description}</span>
            <br/>
            <span >Points: ${task.points}</span>
            <br/>
            <button
              data-uuid="${task.uuid}"
              data-title="${task.title}"
              data-description="${task.description}"
              data-points="${task.points}" class="move-to-doing">Move to Doing</button>
          </li>
        `
        taskList.innerHTML += toDoListItem;
      });

    setDeleteTaskButtonsEventListeners();
    setMoveToDoingButtonsEventListeners();
  }

  // ------ Event Listeners ------
  addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = addTaskTitle.value;
    let description = addTaskDescription.value;
    let points = addTaskPoints.value;

    store.dispatch(addTodoTask(title, description, points))
    // console.log('Title:', addNoteTitle.value, 'Content:', addNoteContent.value);
  });

  function setDeleteTaskButtonsEventListeners() {
    let buttons = document.querySelectorAll('.delete-todo-task');

    for(let button of buttons) {
      button.addEventListener('click', () => {
        deleteNote(button.dataset.uuid);
      });
    }
  }

  function setMoveToDoingButtonsEventListeners() {
    let buttons = document.querySelectorAll('.move-to-doing');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        let title = button.dataset.title;
        let description = button.dataset.description;
        let points = button.dataset.points;
        promoteTaskToDoing(title, description, points)
        deleteNote(button.dataset.uuid)
      });
    })
  }

  store.subscribe(() => {
    renderTasks();
  })
  // ------ Render the initial Notes ------
  renderTasks();
}
