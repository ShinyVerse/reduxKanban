import todoReducer from './todoReducer';
import doingReducer from './doingReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  tasks: todoReducer,
  doingTasks: doingReducer
})

export default reducers;
