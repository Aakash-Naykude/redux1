import {
  // addTodo,
  addTodoError,
  addTodoLoading,
  addTodoSucces,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
  removeTodo,
  toggleTodoSucces,
} from "../Redux/actions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./todo.css";
export const TodoInput = () => {
  const [text, setText] = useState("");
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
  const handleData = () => {
    // dispatch(addTodo(text));
    dispatch(addTodoLoading());
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: false, title: text }),
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        dispatch(addTodoSucces(res));
        getTodoLists();
      })
      .catch((err) => {
        dispatch(addTodoError(err));
      });
  };

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

  const handleToggle = (id, title, status) => {
    // let resp = await fetch(`http://localhost:3001/todos/${id}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    
    status = !status;
    console.log(status);
    setText(title);
    getTodoLists();
  };
  return loading ? (
    <h1>Loading</h1>
  ) : error ? (
    <h1>Something went wrong</h1>
  ) : (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleData}>ADD TODO</button>
      <div className="cont">
        {todos.map((i) => (
          <div key={i.id}>
            {i.title} -{i.status ? "Done" : "Not-Done"}
            <button onClick={() => handleDelete(i.id)}>Delete</button>
            <button onClick={() => handleToggle(i.id, i.title, i.status)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
