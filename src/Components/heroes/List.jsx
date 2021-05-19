import React from "react";
import { getHeroByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroeCard } from "./HeroeCard";

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher);
  return (
    <div className="flex justify-center flex-wrap animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroeCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
