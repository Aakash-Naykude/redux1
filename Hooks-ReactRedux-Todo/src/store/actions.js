import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  EDIT_TODO,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  REMOVE_TODO,
  TOGGLE_TODO_LOADING,
  TOGGLE_TODO_SUCCESS,
} from "./actionsType";

export const addTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING,
    // payload: data,
  };
};
export const addTodoSucces = (data) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data,
  };
};
export const addTodoError = (err) => {
  return {
    type: ADD_TODO_ERROR,
    payload: err,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};

export const getTodoLoading = () => {
  return {
    type: GET_TODO_LOADING,
    // payload: data,
  };
};
export const getTodoSuccess = (data) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: data,
  };
};
export const getTodoError = (err) => {
  return {
    type: GET_TODO_ERROR,
    payload: err,
  };
};

export const toggleTodoSucces = (id) => {
  return {
    type: TOGGLE_TODO_SUCCESS,
    payload: id,
  };
};
export const toggleTodoLoading = () => {
  return {
    type: TOGGLE_TODO_LOADING,
  };
};

export const editTodoFrom = (data, id) => {
  return {
    type: EDIT_TODO,
    payload: data,
    id: id,
  };
};
