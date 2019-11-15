import { createStore } from 'redux';
import reducers from '../reducers/reducers';

// const initialState = {
//   tasks: [{
//     uuid: 'TODO',
//     title: 'title',
//     description: 'desc',
//     points: '1'
//   }],
//   doingTasks: [{
//     uuid: '12345678',
//     title: 'DOING',
//     description: 'desc',
//     points: '90'
//   }]
// }
export default createStore(reducers);
