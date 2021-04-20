import { handleActions } from 'redux-actions';
import { fetchTodos, fetchTodosSuccess, fetchTodosFail } from '../actions';

const initialState = {
  action: '',
  error: null,
  data: [],
};

const reducers = handleActions(
  new Map([
    [
      fetchTodos,
      (state, action) => ({
        ...state,
        action: action.type,
      }),
    ],
    [
      fetchTodosSuccess,
      (state, action) => ({
        ...state,
        action: action.type,
        data: action.payload.data,
      }),
    ],
    [
      fetchTodosFail,
      (state, action) => ({
        ...state,
        action: action.type,
        error: action.payload.error,
      }),
    ],
  ]),
  initialState,
);

export default { todo: reducers };
