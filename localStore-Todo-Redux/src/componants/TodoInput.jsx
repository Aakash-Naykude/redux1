import { nanoid } from "nanoid";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/Todos/actions";

export const TodoInpt = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      title,
      id: nanoid(8),
      status: false,
    };
    dispatch(addTodo(payload));
  };

  const todos = useSelector((state) => state.todoReducer.todos);
  return (
    <div>
      <h3>Add Todos</h3>
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder=" Add Todos"
      />
      <button onClick={handleAdd}>ADD TODO</button>
      <div>
        {todos.map((i) => (
          <div key={i.id}>{i.title}</div>
        ))}
      </div>
    </div>
  );
};
