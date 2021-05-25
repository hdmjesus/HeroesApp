import { mount, shallow } from "enzyme";
import React from "react";
import { PublicRoute } from "../../routes/PublicRoute";
import { MemoryRouter } from "react-router";
describe("Pruebas en <PrivateRoute/>", () => {
  const props = { location: { pathname: "/login" } };

  test("should show  the component if is not authenticated and save in localstorage", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PublicRoute
          exact
          path="/login"
          component={() => <h1>hello</h1>}
          isAuthenticated={false}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").exists()).toBe(true);
  });

  test("should  block the component if is  authenticated", () => {
    Storage.prototype.setItem = jest.fn(() => {});

    const wrapper = mount(
      <MemoryRouter>
        <PublicRoute
          exact
          path="/"
          component={() => <h1>hello</h1>}
          isAuthenticated={true}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find("h1").exists()).toBe(false);
  });
});
