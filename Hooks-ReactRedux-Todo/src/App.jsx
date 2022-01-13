import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./componants/Home";
import { TodoList } from "./componants/TodoList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
