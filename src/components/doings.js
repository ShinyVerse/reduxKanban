import store from '../store/store';
import { addDoingTask, removeDoingTask, addTodoTask } from '../actions/actions';

export default function Doings() {
  let doingTaskList = document.getElementById('doing-tasks');


  function deleteTask(uuid) {
    store.dispatch(removeDoingTask(uuid));
  }

  function returnTaskToTodo(title, description, points) {
    store.dispatch(addTodoTask(title, description, points));
  }

  function renderDoingTasks(){

    let doingTasks = store.getState().doingTasks;
    doingTaskList.innerHTML = '';

    doingTasks.map(task => {
      let doingListItem = `
        <li>
          <b>${task.title}</b>
          <button
            data-uuid="${task.uuid}"
            class='delete-doing-task'>delete</button>
          <br/>
          <span>${task.description}</span>
          <br/>
          <span >Points: ${task.points}</span>
          <br/>
          <button
            data-uuid="${task.uuid}"
            data-title="${task.title}"
            data-description="${task.description}"
            data-points="${task.points}" class="return-to-todo">Back to Todo</button>
        </li>
      `

      doingTaskList.innerHTML += doingListItem;

    })
    setDeleteTaskButtonsEventListeners();
    setMoveBackTaskButtonsEventListeners();
  }

  function setDeleteTaskButtonsEventListeners() {
    let buttons = document.querySelectorAll('.delete-doing-task');

    for(let button of buttons) {
      button.addEventListener('click', () => {
        deleteTask(button.dataset.uuid);
      });
    }
  }

  function setMoveBackTaskButtonsEventListeners() {
    let buttons = document.querySelectorAll('.return-to-todo');

    buttons.forEach(button => {
      button.addEventListener('click', () => {

        let title = button.dataset.title;
        let description = button.dataset.description;
        let points = button.dataset.points;

        returnTaskToTodo(title, description, points)
        deleteTask(button.dataset.uuid)
      })
    })
  }

  store.subscribe(() => {
    renderDoingTasks();
  })


  renderDoingTasks();

}
