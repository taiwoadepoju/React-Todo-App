import { useState } from 'react';
import useAddTodo from 'hooks/useAddTodo';

const AddNewTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const { handleAddTodo } = useAddTodo();

  const handleAddNewTodo = () => {
    handleAddTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div className="row m-1 p-3">
      <div className="col col-11 mx-auto">
        <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
          <div className="col">
            <input
              className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
              type="text"
              placeholder="Add new todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </div>
          <div className="col-auto px-0 mx-0 mr-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddNewTodo}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewTodo;
