import { ADD_TODO_TASK, REMOVE_TODO_TASK } from '../actions/actions';

const initialState = {
  tasks: []
}

function rootReducer(state = initialState, action){
  switch(action.type) {
    case ADD_TODO_TASK:{
      return {
        tasks: [
          ...state.tasks,
          {
            uuid: action.uuid,
            title: action.title,
            description: action.description,
            points: action.points
          }
        ]
      }
    }
    case REMOVE_TODO_TASK: {
      return {
        tasks: state.tasks.filter(task => task.uuid != action.uuid)
      }
    }

    default:
    return state;
  };
}

export default rootReducer;
