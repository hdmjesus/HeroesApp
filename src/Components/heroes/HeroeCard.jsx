import React from "react";
import { Link } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div
      className="card mt-5 mb-3 m-1  text-xs"
      style={{ maxWidth: 350, padding: 0, minWidth: 150 }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={heroImages(`./${id}.webp`).default}
            className="card-img"
            alt="superhero"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {alter_ego !== characters && <p className=""> {characters}</p>}
            <p className="card-text">
              {" "}
              <small className="text-muted"> {first_appearance}</small>
            </p>
            <Link className="text-blue-500" to={`./hero/${id}`}>
              Mas...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
