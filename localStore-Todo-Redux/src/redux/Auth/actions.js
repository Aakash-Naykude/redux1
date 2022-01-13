import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./actiontype";

export const logInSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};
export const logOut = () => {
  return {
    type: LOGOUT,
  };
};
export const logInFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  };
};
