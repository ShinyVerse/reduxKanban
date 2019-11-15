import store from '../store/store';
import { addDoingTask, removeDoingTask } from '../actions/actions';

export default function Doings() {
  let doingTaskList = document.getElementById('doing-tasks');


  function deleteTask(uuid) {
    store.dispatch(removeDoingTask(uuid));
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
        </li>
      `

      doingTaskList.innerHTML += doingListItem;

    })
    setDeleteTaskButtonsEventListeners();
  }

  function setDeleteTaskButtonsEventListeners() {
    let buttons = document.querySelectorAll('.delete-doing-task');

    for(let button of buttons) {
      button.addEventListener('click', () => {
        deleteTask(button.dataset.uuid);
      });
    }
  }

  store.subscribe(() => {
    renderDoingTasks();
  })


  renderDoingTasks();

}
