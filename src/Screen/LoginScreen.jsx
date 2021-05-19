import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.replace("/");
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
