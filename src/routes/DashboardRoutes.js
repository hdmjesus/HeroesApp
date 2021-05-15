import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { NavBar } from "../Components/ui/NavBar";
import { DcScreen } from "../Screen/DcScreen";
import { HeroesScreen } from "../Screen/HeroesScreen";
import { MarvelScreen } from "../Screen/MarvelScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/heroe/:heroid" component={HeroesScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
