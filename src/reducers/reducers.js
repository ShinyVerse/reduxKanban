import todoReducer from './todoReducer';
import doingReducer from './doingReducer';
import doneReducer from './doneReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  tasks: todoReducer,
  doingTasks: doingReducer,
  doneTasks: doneReducer
})

export default reducers;
