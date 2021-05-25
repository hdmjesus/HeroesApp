import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { types } from "../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    //
    const userLogin = { name: "Jesus Hernandez" };
    const actionLogin = { type: types.login, payload: userLogin };
    dispatch(actionLogin);

    const lastPath = localStorage.getItem("lastPath") || "/";
    history.replace(lastPath);
  };
  return (
    <div className="container mt-5">
      <h1 className="m-3">LoginScreen</h1>
      <hr />
      <button className="btn btn-primary m-4" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
