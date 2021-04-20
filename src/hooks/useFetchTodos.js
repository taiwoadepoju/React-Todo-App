import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import todoListStateSelector from 'selectors';
import services from '../services';
import { fetchTodos, fetchTodosSuccess, fetchTodosFail } from '../actions';

const useFetchTodos = () => {
  const dispatch = useDispatch();

  const dispatchFetchTodos = useCallback(async () => {
    try {
      dispatch(fetchTodos());
      const data = await services.fetchTodos();
      dispatch(fetchTodosSuccess({ data }));
    } catch (error) {
      dispatch(fetchTodosFail({ error }));
    }
  }, [dispatch]);

  const { action, error, data } = useSelector(todoListStateSelector);

  const isLoading = fetchTodos.toString() === action;

  return {
    dispatchFetchTodos,
    data,
    action,
    error,
    isLoading,
  };
};

export default useFetchTodos;
