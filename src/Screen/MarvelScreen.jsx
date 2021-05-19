import React from "react";
import { HeroesList } from "../Components/heroes/List";

export const MarvelScreen = () => {
  return (
    <div className="container mt-5">
      <h1 className="m-3">Marvel Comics</h1>
      <hr />

      <HeroesList publisher={"Marvel Comics"} />
    </div>
  );
};
