import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { useContext } from "react";

export const UserInfo = (): JSX.Element => {

  const { user, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  !isLoggedIn && navigate("/");

  return (
    <div>
      <h1>User Info</h1>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
};