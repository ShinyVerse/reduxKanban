const uuidReq = require('uuid/v1');
export const ADD_TODO_TASK = 'ADD_TODO_TASK';

export function addTodoTask(title, description, points) {
  return {
    type: ADD_TODO_TASK,
    uuid: uuidReq(),
    title,
    description,
    points
  }
}
