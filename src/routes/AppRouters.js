import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { LoginScreen } from "../Screen/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route path="/" component={DashboardRoutes} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
