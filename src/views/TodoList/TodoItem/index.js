import useCompleteTodo from 'hooks/useCompleteTodo';
import PropTypes from 'prop-types';

const TodoItem = ({ title, completed, index }) => {
  const { handleCompleteTodo } = useCompleteTodo();
  return (
    <div>
      <div className="row pt-2 todo-item rounded">
        <div className="col-sm-1">
          <div className="form-check pt-1 completed-checkbox-section">
            <input
              className="form-check-input completed-checkbox"
              title={completed ? 'Mark as not complete' : 'Mark as complete'}
              type="checkbox"
              value=""
              checked={completed}
              onChange={(e) => handleCompleteTodo(index, e.target.checked)}
            />
          </div>
        </div>
        <div className="col-sm-9">
          <p className={completed ? 'lead completed' : 'lead'}>{title}</p>
        </div>
        <div className="col-sm-2">
          <h6>
            {completed ? <span className="badge bg-success text-white">Completed</span>
              : <span className="badge bg-secondary text-white">Not Completed</span>}
          </h6>
        </div>
      </div>
    </div>
  );
};

TodoItem.defaultProps = {
  title: '',
  completed: false,
};

TodoItem.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
  index: PropTypes.number.isRequired,
};

export default TodoItem;
