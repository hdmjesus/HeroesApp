import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router";
import { HeroesList } from "../../../Components/heroes/List";

describe("Pruebas en <DcScreen/>", () => {
  test("debe mostrarse correctamente el componente con el publisher Dc Comics", () => {
    const wrapper = mount(
      <MemoryRouter>
        <HeroesList publisher={"DC Comics"} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrarse correctamente el componente con el publisher Malvel", () => {
    const wrapper = mount(
      <MemoryRouter>
        <HeroesList publisher={"Marvel Comics"} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
