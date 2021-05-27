import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router";
import { SearchScreen } from "../../Screen/SearchScreen";

describe("Probandoo el <SearchScreen/>", () => {
  test("debe mostrar correctamente el componente con valores por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe("Search a heroe");
  });

  test("debe de mostrar a batman y el input con el valor del querystring", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe("batman");
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar un error si no se encunetra el Heroe ", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman1234"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-danger").text().trim()).toBe(
      `Error, personaje batman1234 no econtrado`
    );
  });

  test("debe llamar el push del history", () => {
    const history = { push: jest.fn() };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper
      .find("input")
      .simulate("change", { target: { name: "searchText", value: "batman" } });

    wrapper.find("form").prop("onSubmit")({ preventDefault() {} });

    expect(history.push).toHaveBeenCalledWith(`?q=batman`);
  });
});
