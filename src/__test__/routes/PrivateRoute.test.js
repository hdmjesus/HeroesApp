import { mount, shallow } from "enzyme";
import React from "react";
import { PrivateRoute } from "../../routes/PrivateRoute";
import { MemoryRouter } from "react-router";
describe("Pruebas en <PrivateRoute/>", () => {
  const props = { location: { pathname: "/" } };

  test("should show  the component if is authenticated and save in localstorage", () => {
    Storage.prototype.setItem = jest.fn(() => {});

    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          exact
          path="/"
          component={() => <h1>hello</h1>}
          isAuthenticated={true}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/");
  });

  test("should  block the component if is not authenticated", () => {
    Storage.prototype.setItem = jest.fn(() => {});

    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          exact
          path="/"
          component={() => <h1>hello</h1>}
          isAuthenticated={false}
          {...props}
        />
      </MemoryRouter>
    );
    console.log(wrapper.html());
  });
});
