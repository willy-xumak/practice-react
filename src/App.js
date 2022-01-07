import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My To-do's</h1>
      <Todo title="Check your task" />
      <Todo title="Review the dashboard" />
      <Todo title="Give up from life" />
    </div>
  );
}

export default App;
