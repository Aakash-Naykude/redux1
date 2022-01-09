import { ADD_TODO, TOGGLE_TODO } from "./ActionType";
export const init = {
  todo: [],
};
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, todo: [...state.todo, payload] };
    case TOGGLE_TODO:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.title === payload ? { ...item, status: !item.status } : item
        ),
      };
    default:
      return false;
  }
};
