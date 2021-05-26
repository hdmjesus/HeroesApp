import React from "react";
import { mount } from "enzyme";
import { LoginScreen } from "../../Screen/LoginScreen";
import { AuthContext } from "../../Context/AuthContext";
import { types } from "../../types/types";

describe("Pruebas en <LoginScreen/>", () => {
  const { Provider } = AuthContext;
  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: false },
  };
  const historyMock = { replace: jest.fn() };

  const wrapper = mount(
    <Provider value={contextValue}>
      <LoginScreen history={historyMock} />
    </Provider>
  );
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de realizar el dispatch y la navegacion", () => {
    const handleClick = wrapper.find("button").prop("onClick");
    handleClick();
    const userLogin = { name: "Jesus Hernandez" };
    const actionLogin = { type: types.login, payload: userLogin };
    expect(contextValue.dispatch).toHaveBeenCalledWith(actionLogin);
    expect(historyMock.replace).toHaveBeenCalledWith("/");

    //Debe dirigirme a la ultima pagina que estaba antes de hacer logout
    localStorage.setItem("lastPath", "/dc");
    handleClick();

    expect(historyMock.replace).toHaveBeenCalledWith("/dc");
  });
});
