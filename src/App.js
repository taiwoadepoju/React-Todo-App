import './App.css';
import { Provider } from 'react-redux';
import TodoList from 'containers/TodoList';
import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
