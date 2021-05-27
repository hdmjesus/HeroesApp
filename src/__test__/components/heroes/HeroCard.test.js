import { mount } from "enzyme";
import React from "react";
import { HeroesList } from "../../../Components/heroes/List";
import { HeroeCard } from "../../../Components/heroes/HeroeCard";
import { MemoryRouter } from "react-router";
describe("Pruebas en el componente <HeroCard/>", () => {
  test("debe renderizarce correctamente el card", () => {
    const batman = {
      id: "dc-batman",
      superhero: "Batman",
      publisher: "DC Comics",
      alter_ego: "Bruce Wayne",
      first_appearance: "Detective Comics #27",
      characters: "Bruce Wayne",
    };
    const wrapper = mount(
      <MemoryRouter>
        <HeroeCard {...batman} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".card-title").text().trim()).toBe(batman.superhero);
  });
});
