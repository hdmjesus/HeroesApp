import React, { useContext } from "react";
import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  test("should return default state ", () => {
    const userLogin = { name: "Jesus Hernandez" };
    // const actionLogin = { type: types.login, payload: userLogin };
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("should authenticated and put the name of user", () => {
    const login = { logged: true, name: expect.any(String) };
    const userLogin = { name: "Jesus Hernandez" };
    const actionLogin = { type: types.login, payload: userLogin };
    const newState = authReducer({}, actionLogin);
    expect(newState).toEqual(login);
  });

  test("should delete the name of user and logged in false ", () => {
    const logout = { logged: false };
    const actionLogin = { type: types.logout };
    const newState = authReducer({}, actionLogin);
    expect(newState).toEqual(logout);
  });
});
