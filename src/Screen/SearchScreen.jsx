import React, { useMemo, useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import { HeroeCard } from "../Components/heroes/HeroeCard";
import { useForm } from "../Hooks/useForm";
import { getHeroesByName } from "../selectors/getHeroesByName";
export const SearchScreen = ({ history }) => {
  const [error, setError] = useState(false);
  const location = useLocation();
  const { q = " " } = queryString.parse(location.search);

  const [formValue, handleInputChange, reset] = useForm({ searchText: q });
  const { searchText } = formValue;

  const heroesFiltered = useMemo(() => getHeroesByName(searchText), [q]);

  const handleError = () => {
    if (q === "" || q === " ") {
      setError(false);
      console.log("error false");
    }
    if (heroesFiltered.length === 0 && q !== "") {
      setError(true);
      console.log(" error true");
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    handleError();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <div className=" flex gap-5 flex-col md:flex-row container  mt-4">
        <div className="md:w-5/12">
          <h4 className="m-3">Search your heroe</h4>
          <hr />

          <form
            className="container mt-3 flex flex-col"
            action=""
            onSubmit={handleSearch}
          >
            <input
              className="form-control outline-none "
              type="text"
              name="searchText"
              id=""
              placeholder="Find you hero"
              onChange={handleInputChange}
              autoComplete="off"
              value={searchText}
            />
            <button
              type="submit"
              className="btn w-2/4 m-auto  md:w-full mt-3 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>

        <div className="md:w-8/12 mt-4 ">
          {" "}
          <h4 className="mv-3">Results</h4>
          <hr />
          {q === " " && error == false ? (
            <div className="alert alert-info w-full m-2"> Search a heroe</div>
          ) : null}
          {heroesFiltered.length === 0 && !error && (
            <div className="alert alert-danger m-2">
              <p>
                Error, personaje <b>{q}</b> no econtrado
              </p>
            </div>
          )}
          <div className="flex flex-wrap m-auto">
            {heroesFiltered.map((hero) => (
              <HeroeCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
