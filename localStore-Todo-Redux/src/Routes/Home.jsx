import { useSelector } from "react-redux";
import { TodoInpt } from "../componants/TodoInput";
import { Navigate } from "react-router-dom";
export const Home = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const token = useSelector((state) => state.authReducer.token);
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <h4>Token : {token}</h4>
      <TodoInpt />
    </div>
  );
};
