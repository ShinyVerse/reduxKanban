import { ADD_DOING_TASK } from '../actions/actions';

function doingReducer(doingTasks = [], action) {
  switch (action.type) {
    case ADD_DOING_TASK: {
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
    default:
      return doingTasks;
  }
}


export default doingReducer;
