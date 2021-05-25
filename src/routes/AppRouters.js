import React, { useReducer, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { authReducer } from "../auth/authReducer";
import { AuthContext } from "../Context/AuthContext";
import { LoginScreen } from "../Screen/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { Logged: false };
};
const { Provider } = AuthContext;

const App = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <BrowserRouter>
      <Provider value={{ user, dispatch }}>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={user.logged}
          />

          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
