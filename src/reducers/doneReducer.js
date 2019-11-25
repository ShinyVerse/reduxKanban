import { REMOVE_DONE_TASK, ADD_DONE_TASK } from '../actions/actions'

const init = [{
    uuid: '70987087',
    title: 'DONE',
    description: 'I am done',
    points: '33'
  }]

function doneReducer(doneTasks = init, action) {
  switch (action.type) {
    case ADD_DONE_TASK:
      return [
        ...doneTasks,
        {
          uuid: action.uuid,
          title: action.title,
          description: action.description,
          points: action.points
        }
      ]
    case REMOVE_DONE_TASK:
      return doneTasks.filter(task => task.uuid !== action.uuid);

    default:
      return doneTasks;
  }
}


export default doneReducer;
