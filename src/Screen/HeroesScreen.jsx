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
    <div className="animate__animated animate__fadeInLeft">
      <div className="">
        <img className=" " src={`../images/${heroid}.webp`} alt={heroid} />
      </div>
      <div className="">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
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
        </ul>
        <h5> Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
