import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { AppRouters } from "../../routes/AppRouters";

describe("Pruebas en el componente <AppRouters/>", () => {
  test("should show login if is not authenticated ", () => {
    const { Provider } = AuthContext;
    const contextValue = { dispatch: jest.fn(), user: { logged: false } };
    const wrapper = mount(
      <Provider value={contextValue}>
        <AppRouters />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("should show the ScreenMarvel if is authenticated ", () => {
    const { Provider } = AuthContext;
    const contextValue2 = {
      dispatch: jest.fn(),
      user: { logged: true, name: "Jesus Hernandez" },
    };
    const wrapper2 = mount(
      <Provider value={contextValue2}>
        <MemoryRouter>
          <AppRouters />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper2).toMatchSnapshot();
    console.log(wrapper2.html());
    expect(wrapper2.find(".navbar").exists()).toBe(true);
  });
});
