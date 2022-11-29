import Header from './components/Header';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';
import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import TaskDetails from './components/TaskDetails';

function App() {
  const appName = 'My App';
  const [showForm, setShowForm] = useState(false);
  const onAddTaskToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Header name={appName} onAddTaskToggle={onAddTaskToggle} />
      {showForm && <AddTask />}
      <ul>
        <TasksList />
      </ul>
      <nav>
        <Link>Home</Link>
        <Link>Tasks</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header name={appName} onAddTaskToggle={onAddTaskToggle} />
              {showForm && <AddTask />}
            </>
          }
        ></Route>
        <Route
          path="/tasks"
          element={
            <ul>
              <TasksList />
            </ul>
          }
        ></Route>
        <Route pah="/Tasks/:taskId" element={<TaskDetails />} />
        <Route path="*" element={<p>Nothing to math this path. </p>} />
      </Routes>
    </div>
  );
}

export default App;
