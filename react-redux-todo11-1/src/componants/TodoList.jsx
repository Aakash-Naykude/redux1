import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
  removeTodo,
  toggleTodoLoading,
  toggleTodoSucces,
} from "../store/actions";
import "./Todolist.css";
export const TodoList = () => {
  const { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    error: state.error,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    getTodoLists();
  }, []);
  async function getTodoLists() {
    try {
      dispatch(getTodoLoading());
      const data = await fetch("http://localhost:3001/todos").then((d) =>
        d.json()
      );
      dispatch(getTodoSuccess(data));
    } catch (e) {
      dispatch(getTodoError(e));
    }
  }
  const handleDelete = async (id) => {
    let resp = await fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getTodoLists();
    dispatch(removeTodo(id));
  };

  const handleToggle = async (id) => {
    dispatch(toggleTodoSucces(id));
    var data;
    todos.map((todo) => (todo.id === id ? (data = todo) : todo));
    let resp = await fetch(`http://localhost:3001/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(todos);
    getTodoLists();
  };
  return loading ? (
    <h1>
      <h1>Loading....</h1>
    </h1>
  ) : error ? (
    <h1>
      <h1>Something went wrong</h1>
    </h1>
  ) : (
    <div>
      <div className="todolist">
        <h1 style={{ border: "1px solid black" }}>Todo List</h1>
        <Link to="/">
          <h1>To Homepage</h1>
        </Link>
      </div>

      {todos.map((i) => (
        <div className="listOfTodo" key={i.id}>
          <h3 className="oneTodo">Title : {i.title}</h3>
          <h3 className="oneTodo">
            - - - Status : {i.status ? "Done" : "Not Done"} : --
          </h3>
          <button className="btn" onClick={() => handleDelete(i.id)}>
            Delete Todo
          </button>
          <button className="btn">Edit Todo</button>
          <button className="btn" onClick={() => handleToggle(i.id)}>
            Toggle Status
          </button>
        </div>
      ))}
    </div>
  );
};
