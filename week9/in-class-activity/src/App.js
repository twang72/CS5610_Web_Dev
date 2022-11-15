import Header from "./components/Header"
import TaskLists from "./components/TasksList";

function App() {
  const appName = "My App"
  return (
    <div className="App">
      <Header name={appName}/>
      <ul>
        <TaskLists />
      </ul>
    </div>
  );
}

export default App;
