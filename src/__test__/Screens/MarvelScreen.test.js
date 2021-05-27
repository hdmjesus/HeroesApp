import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router";
import { MarvelScreen } from "../../Screen/MarvelScreen";

describe("Pruebas en <MarvelScreen/>", () => {
  test("debe mostrarse correctamente el componente", () => {
    const wrapper = mount(
      <MemoryRouter>
        <MarvelScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Marvel Comics");
  });
});
