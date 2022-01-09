import { ADD_TODO, TOGGLE_TODO } from "./ActionType";

export const addTodo = (item) => ({
  type: ADD_TODO,
  payload: {
    title: item,
    status: false,
  },
});
export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload,
});
