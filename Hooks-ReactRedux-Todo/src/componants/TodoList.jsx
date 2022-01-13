import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  editTodoFrom,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
  removeTodo,
  toggleTodoLoading,
  toggleTodoSucces,
} from "../store/actions";
import "./Todolist.css";

import styled from "styled-components";
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
    console.log(data);
    dispatch(getTodoLoading());
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

  const [edit, setEdit] = useState("");
  const [setid, setSetid] = useState("");
  const handleEdit = (id, data) => {
    let input = document.getElementById("input");
    input.innerText = data;
    let cont = document.getElementById("editCont");
    cont.style.display = "block";
    setSetid(id);
    console.log(id, data, setid);
  };
  const handleEditData = async (setid, edit) => {
    dispatch(editTodoFrom(edit, setid));
    console.log(setid, edit);
    dispatch(getTodoLoading());
    var payload = {
      status: false,
      title: edit,
      id: setid,
    };
    let resp = await fetch(`http://localhost:3001/todos/${setid}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      <div id="editCont">
        <h4 id="input">a</h4>
        <input
          type="text"
          onChange={(e) => setEdit(e.target.value)}
          value={edit}
        />
        <br />
        <button onClick={() => handleEditData(setid, edit)}>
          Submit Changes
        </button>
      </div>
      {todos.map((i) =>
        i.status ? (
          <div
            className="listOfTodo"
            key={i.id}
            style={{ backgroundColor: "green" }}
          >
            <h3 className="oneTodo">Title : {i.title}</h3>
            <h3 className="oneTodo">
              - - - Status : {i.status ? "Done" : "Not Done"} : --
            </h3>
            <button className="btn" onClick={() => handleDelete(i.id)}>
              Delete Todo
            </button>
            <button className="btn" onClick={() => handleEdit(i.id, i.title)}>
              Edit Todo
            </button>
            <button className="btn" onClick={() => handleToggle(i.id)}>
              Toggle Status
            </button>
          </div>
        ) : (
          <div
            className="listOfTodo"
            key={i.id}
            style={{ backgroundColor: "orange" }}
          >
            <h3 className="oneTodo">Title : {i.title}</h3>
            <h3 className="oneTodo">
              - - - Status : {i.status ? "Done" : "Not Done"} : --
            </h3>
            <button className="btn" onClick={() => handleDelete(i.id)}>
              Delete Todo
            </button>
            <button className="btn" onClick={() => handleEdit(i.id, i.title)}>
              Edit Todo
            </button>
            <button className="btn" onClick={() => handleToggle(i.id)}>
              Toggle Status
            </button>
          </div>
        )
      )}
    </div>
  );
};
