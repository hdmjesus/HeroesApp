import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { NavBar } from "../Components/ui/NavBar";
import { DcScreen } from "../Screen/DcScreen";
import { HeroesScreen } from "../Screen/HeroesScreen";
import { MarvelScreen } from "../Screen/MarvelScreen";
import { SearchScreen } from "../Screen/SearchScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroid" component={HeroesScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
