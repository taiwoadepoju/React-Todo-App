import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import TodoItem from 'views/TodoList/TodoItem';
import AddNewTodo from 'views/TodoList/AddNewTodo';

const TodoList = ({
  data, error, isLoading, handleFetchTodos,
}) => {
  useEffect(() => {
    handleFetchTodos();
  }, [handleFetchTodos]);

  return (
    <div>
      <div className="container m-5 p-2 pt-5 rounded mx-auto bg-light shadow">
        <div className="row m-1 p-4">
          <div className="col">
            <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
              <p>My Todos</p>
            </div>
          </div>
        </div>
        <AddNewTodo />
        <div className="p-2 mx-4 border-black-25 border-bottom" />
        {isLoading && <Loader />}
        {error && (
        <p className="text-danger text-center pt-5">
          An error occured while fetching todos!
          <button
            className="btn btn-danger ml-2"
            type="button"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </p>
        )}
        <div className="row mx-1 px-5 pb-3 w-80">
          <div className="col mx-auto">
            {data.map((
              { title, completed },
              i,
            ) => <TodoItem title={title} index={i} completed={completed} key={`${title}${i + 1}`} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

TodoList.defaultProps = {
  error: null,
};

TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleFetchTodos: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default TodoList;
