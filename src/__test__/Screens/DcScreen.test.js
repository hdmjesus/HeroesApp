import { shallow, mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router";
import { DcScreen } from "../../Screen/DcScreen";

describe("Pruebas en <DcScreen/>", () => {
  test("debe mostrarse correctamente el componente", () => {
    const wrapper = mount(
      <MemoryRouter>
        <DcScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Dc Heroes");
  });
});
