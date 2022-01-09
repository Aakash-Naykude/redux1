import "./App.css";
import { Todo } from "./Componants/Todo";
import store from "./Redux/Store";
function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
