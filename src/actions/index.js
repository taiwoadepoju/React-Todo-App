import { createAction } from 'redux-actions';
import constants from '../constants';

const fetchTodos = createAction(constants.FETCH_TODOS);
const fetchTodosSuccess = createAction(constants.FETCH_TODOS_SUCCESS);
const fetchTodosFail = createAction(constants.FETCH_TODOS_FAILURE);
const addTodos = createAction(constants.ADD_TODO);

export {
  fetchTodos,
  fetchTodosSuccess,
  fetchTodosFail,
  addTodos,
};
