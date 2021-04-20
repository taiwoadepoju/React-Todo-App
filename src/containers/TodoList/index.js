import useFetchTodos from 'hooks/useFetchTodos';
import TodoList from 'views/TodoList';

const TodoListContainer = () => {
  const { data, isLoading, dispatchFetchTodos } = useFetchTodos();

  return (
    <TodoList data={data} isLoading={isLoading} handleFetchTodos={dispatchFetchTodos} />
  );
};

export default TodoListContainer;
