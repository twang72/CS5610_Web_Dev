import Header from "./components/Header"
import TaskLists from "./components/TasksList";
import AddTask from "./components/AddTask";
import {useState} from 'react';
import {Link, Routes, Route} from "react-router-dom"
import taskDetails from "./components/TaskDetails";


function App() {
  const appName = "My App";
  const [showForm, setShowForm] = useState(false);

  const onAddTaskToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <nav>
        <Link>Home</Link>
        <Link>TasksList</Link>
      </nav>
      <Routes>
        <Route path='/' element ={
          <>
            <Header name={appName} onAddTaskToggle={onAddTaskToggle}/>
            {showForm && <AddTask />}
          </>
        }></Route>
        <Route path='/Tasks' element={
          <ul>
            <TaskLists />
          </ul>
        } />
        <Route pah="/Tasks/:taskId" element={<taskDetails />} />
        <Route path="*" element={<p>Nothing to math this path. </p>} />
      </Routes>
    </div>
  );
}

export default App;
