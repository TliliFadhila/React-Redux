
import './App.css';
import AddTask from './Elements/AddTask';
import TaskList from './Elements/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>TO DO </h1>
    <AddTask/>
    <TaskList/>
    </div>
  );
}

export default App;
