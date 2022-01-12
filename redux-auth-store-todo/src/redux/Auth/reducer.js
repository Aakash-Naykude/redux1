import { loadData, saveData } from "../../utils/LocalStorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./actiontype";
const token = loadData("token");

const init = {
  isAuth: token ? true : false,
  token: token || "",
};
export const authreducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      saveData("token", payload);
      return {
        ...state,
        isAuth: true,
        token: payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    default:
      return state;
  }
};
