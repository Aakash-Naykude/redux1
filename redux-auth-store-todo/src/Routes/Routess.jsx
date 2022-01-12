import { useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { logOut } from "../redux/Auth/actions";
import { Home } from "./Home";
import { LoginPage } from "./LoginPage";

export const Routess = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <div style={{ display: "flex", gap: "10%", justifyContent: "center" }}>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/login">Login</Link>
        </h3>
        <h3 onClick={handleLogout}>
          <Link to="/login">Logout</Link>
        </h3>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};
