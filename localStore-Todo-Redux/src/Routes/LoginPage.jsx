import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { Login } from "../componants/Login";
import { logInFailure, logInSuccess } from "../redux/Auth/actions";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const handleLogin = ({ email, password }) => {
    if (email === "admin" && password === "admin") {
      dispatch(logInSuccess("faketoken"));
    } else {
      dispatch(logInFailure("wrong Credentials"));
    }
  };
  if(isAuth){
      return <Navigate to={"/"} />
  }
  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
};
