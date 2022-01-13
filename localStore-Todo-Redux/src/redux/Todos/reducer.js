import { loadData, saveData } from "../../utils/LocalStorage";
import { ADD_TODO } from "./actiontypes";

const init = {
  todos: loadData("todos") || [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const updateTodo = [...state.todos, payload];
      saveData("todos", updateTodo);
      return {
        ...state,
        todos: updateTodo,
      };
    }

    default:
      return state;
  }
};
