import useFetchTodos from 'hooks/useFetchTodos';
import TodoList from 'views/TodoList';

const TodoListContainer = () => {
  const {
    data, error, isLoading, dispatchFetchTodos,
  } = useFetchTodos();

  return (
    <TodoList
      data={data}
      error={error}
      isLoading={isLoading}
      handleFetchTodos={dispatchFetchTodos}
    />
  );
};

export default TodoListContainer;
