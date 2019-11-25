import store from '../store/store';
import { removeDoneTask } from '../actions/actions';

export default function Done() {
  let taskList = document.getElementById('done-tasks');

  function deleteTask(uuid) {
    store.dispatch(removeDoneTask(uuid));
  }

  function renderDoneTasks() {
    const doneTasks = store.getState().doneTasks;
    taskList.innerHTML = '';

    doneTasks.map(task => {
      const doneListItem = `
      <li>
        <b>${task.title}</b>
        <button
          data-uuid="${task.uuid}"
          class='complete-button'>Complete</button>
        <br/>
        <span>${task.description}</span>
        <br/>
        <span>Points: ${task.points}</span>
        <br/>
      </li>
      `
      taskList.innerHTML += doneListItem;
    })

    setDeleteTaskButtonsEventListeners();
  }

  function setDeleteTaskButtonsEventListeners(){
    let buttons = document.querySelectorAll('.complete-button')

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        deleteTask(button.dataset.uuid);
      })
    })
  }

  store.subscribe(() => {
    renderDoneTasks();
  })

  renderDoneTasks();
}
