import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addTodoError, addTodoLoading, addTodoSucces } from "../store/actions";
import "./Todolist.css";
export const Home = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleData = () => {
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
        dispatch(addTodoSucces(res));
        alert("Added Todo successfully")
      })
      .catch((err) => {
        dispatch(addTodoError(err));
      });
  };
  return (
    <div>
      <div className="home">
        <h1 style={{ border: "1px solid black" }}>Todo Home page</h1>
        <Link to="/todolist">
          <h1>View Todo List</h1>
        </Link>
      </div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleData}>Add Todo</button>
    </div>
  );
};
