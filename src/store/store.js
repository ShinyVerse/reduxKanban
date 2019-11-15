import { createStore } from 'redux';
import reducers from '../reducers/reducers';

// const initialState = {
//   tasks: [{
//     uuid: '123',
//     title: 'title',
//     description: 'desc',
//     points: '1'
//   }],
//   doingTasks: []
// }
export default createStore(reducers);
