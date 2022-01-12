import { ADD_TODO } from "./actiontypes";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};
