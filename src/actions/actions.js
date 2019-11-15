const uuidReq = require('uuid/v1');
export const ADD_TODO_TASK = 'ADD_TODO_TASK';
export const REMOVE_TODO_TASK = 'REMOVE_TODO_TASK';
export const ADD_DOING_TASK = 'ADD_DOING_TASK';
export const REMOVE_DOING_TASK = 'REMOVE_DOING_TASK';

export function addTodoTask(title, description, points) {
  return {
    type: ADD_TODO_TASK,
    uuid: uuidReq(),
    title,
    description,
    points
  }
}

export function addDoingTask(uuid, title, description, points) {
  return {
    type: ADD_DOING_TASK,
    uuid,
    title,
    description,
    points
  }
}

export function removeTodoTask(uuid) {
  return {
    type: REMOVE_TODO_TASK,
    uuid
  }
}

export function removeDoingTask(uuid) {
  return {
    type: REMOVE_DOING_TASK,
    uuid
  }
}
