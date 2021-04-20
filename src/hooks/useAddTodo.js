import { useDispatch, useSelector } from 'react-redux';
import todoListStateSelector from 'selectors';
import { fetchTodosSuccess } from '../actions';

const useAddTodo = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(todoListStateSelector);

  const addTodo = (newTodo) => {
    const newTodoObject = {
      id: data.length + 1,
      title: newTodo,
      completed: false,
    };
    const newTodoList = [newTodoObject].concat(data);
    dispatch(fetchTodosSuccess({ data: newTodoList }));
  };

  return {
    handleAddTodo: (newTodo) => addTodo(newTodo),
  };
};

export default useAddTodo;
