import { useDispatch, useSelector } from 'react-redux';
import todoListStateSelector from 'selectors';
import { fetchTodosSuccess } from '../actions';

const useCompleteTodo = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(todoListStateSelector);

  const completeTodo = (index, checked) => {
    const newItem = data.map((item, sidx) => {
      if (index !== sidx) return item;
      const newTodoObject = {
        id: item.id,
        title: item.title,
        completed: checked,
      };
      return { ...item, ...newTodoObject };
    });
    dispatch(fetchTodosSuccess({ data: newItem }));
  };

  return {
    handleCompleteTodo: (index, checked) => completeTodo(index, checked),
  };
};

export default useCompleteTodo;
