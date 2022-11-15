import Header from "./components/Header"
import TaskLists from "./components/TasksList";
import AddTask from "./components/AddTask";
import {useState} from 'react';


function App() {
  const appName = "My App";
  const [showForm, setShowForm] = useState(false);

  const onAddTaskToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Header name={appName} onAddTaskToggle={onAddTaskToggle}/>
      {showForm && <AddTask/>}
      <ul>
        <TaskLists />
      </ul>
    </div>
  );
}

export default App;
