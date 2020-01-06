import { ADD_DOING_TASK, REMOVE_DOING_TASK } from '../actions/actions';

const init = [{
    uuid: '12345678',
    title: 'DOING',
    description: 'desc',
    points: '90'
  }]

function doingReducer(doingTasks = [], action) {
  switch (action.type) {
    case ADD_DOING_TASK: {
      console.log('going through add doing task');
      return [
        ...doingTasks,
        {
          uuid: action.uuid,
          title: action.title,
          description: action.description,
          points: action.points
        }
      ]
    }
    case REMOVE_DOING_TASK: {
      return doingTasks.filter(task => task.uuid != action.uuid)
    }
    default:
      return doingTasks;
  }
}


export default doingReducer;
