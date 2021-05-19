import React from "react";
import { HeroesList } from "../Components/heroes/List";

export const DcScreen = () => {
  return (
    <div className="container mt-5">
      <h1 className="m-3">Dc Heroes</h1>
      <hr />
      <HeroesList publisher={"DC Comics"} />
    </div>
  );
};
