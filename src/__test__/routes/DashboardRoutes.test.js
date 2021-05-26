import React from "react";
import { DashboardRoutes } from "../../routes/DashboardRoutes";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import { AppRouters } from "../../routes/AppRouters";
import { AuthContext } from "../../Context/AuthContext";

describe("Pruebas en <DashboardRoutes/>", () => {
  const { Provider } = AuthContext;
  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: true, name: "Jesus Hernandez" || expect.any(String) },
  };
  test("should show good ", () => {
    const wrapper = mount(
      <Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Jesus Hernandez");
  });
});
