import React from "react";
import { mount } from "enzyme";
import { HeroesScreen } from "../../Screen/HeroesScreen";
import { MemoryRouter } from "react-router";
import { Route } from "react-router-dom";

describe("Pruebas en <HeroScreen/>", () => {
  const historyMock = { length: 10, push: jest.fn(), goBack: jest.fn() };

  test("debe mostrar el componente redirect si no hay algumentos en el url", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <HeroesScreen history={historyMock} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("Redirect").exists()).toBe(true);
  });

  test("debe de mostrar un heroe si el parametro existe y se encuentra  ", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-batman"]}>
        <Route path="/hero/:heroid" component={HeroesScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".animate__animated").exists()).toBe(true);
  });

  test("debe hacer push si el history.length es menor a 2", () => {
    const historyMock = { length: 1, push: jest.fn(), goBack: jest.fn() };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-batman"]}>
        <Route
          path="/hero/:heroid"
          component={() => <HeroesScreen history={historyMock} />}
        />
      </MemoryRouter>
    );
    wrapper.find("button").simulate("click");
    expect(historyMock.push).toHaveBeenCalledWith("/dc");
    expect(historyMock.goBack).not.toHaveBeenCalled();
  });

  test("debe regresar a la pantalla anterior con goBack", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-batman"]}>
        <Route
          path="/hero/:heroid"
          component={() => <HeroesScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").simulate("click");
    expect(historyMock.goBack).toHaveBeenCalled();
    expect(historyMock.push).not.toHaveBeenCalledWith("/dc");
  });
});
