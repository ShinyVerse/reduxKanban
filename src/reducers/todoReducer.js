import { ADD_TODO_TASK, REMOVE_TODO_TASK } from '../actions/actions';

// const initialState = {
//   tasks: []
// }

function todoReducer(tasks = [], action){
  switch(action.type) {

    case ADD_TODO_TASK:{
      console.log('action going through todos:');
      console.log(action);
      return [
        ...tasks,
        {
          uuid: action.uuid,
          title: action.title,
          description: action.description,
          points: action.points
        }
      ]
    }
    case REMOVE_TODO_TASK: {
      return tasks.filter(task => task.uuid != action.uuid)
    }

    default:
    return tasks;
  };
}

export default todoReducer;
