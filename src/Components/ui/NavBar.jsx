import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { types } from "../../types/types";

export const NavBar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    //
    const userLogin = {};
    const actionLogout = { type: types.logout, payload: userLogin };
    dispatch(actionLogout);
    history.replace("/login");
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-5">
      <Link className="navbar-brand" to="/">
        HeroesApp
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{user.name}</span>
          <button className="btn text-white " onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
