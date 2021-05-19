import React from "react";
import { Redirect, useParams } from "react-router";
import { getHeroById } from "../selectors/getHeroesById";

export const HeroesScreen = ({ history }) => {
  const { heroid } = useParams();
  const hero = getHeroById(heroid);
  console.log(hero);
  if (!hero) {
    return <Redirect to="/" />;
  }
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  const handleReturn = () => {
    if (history.length <= 2) {
      publisher === "Marvel Comics" && history.push("/");
      publisher === "DC Comics" && history.push("/dc");
    } else {
      history.goBack();
    }
  };
  return (
    <div className="animate__animated animate__fadeInLeft p-7 md:flex">
      <div className="">
        <img className=" " src={`../images/${heroid}.webp`} alt={heroid} />
      </div>
      <div className="container  flex mt-4 flex-col items-center md:items-start   ">
        <h3 className="md:ml-28 text-lg uppercase font-bold">{superhero}</h3>
        <ul className="list-group list-group-flush text-xs md:text-base md:m-auto md:mb-5 md:mt-5">
          <li className="list-group-item">
            {" "}
            <b>Alter Ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            {" "}
            <b>First Apearance: </b> {first_appearance}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Characters: </b> {characters}
          </li>
        </ul>

        <button
          className="btn btn-outline-info mt-3 m-auto"
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  );
};
