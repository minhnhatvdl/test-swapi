import React, { useContext } from "react";
import StarWarsContext from "../Contexts/StarWarsContext";
// add a handleClick for component
export const withClickFilm = WrappedComponent => ({ ...props }) => {
  const { episode_id, planets } = props;
  const { starWars, dispatch, dispatchLoading } = useContext(StarWarsContext);
  const { currentFilm, allPlanets } = starWars;
  // change a film
  const handleClick = async () => {
    // if we click again on film, don't load list of planets
    if (currentFilm === episode_id) return false;
    // set loading
    dispatchLoading(true);
    // get list of planets
    const listUrl = [...allPlanets].map(i => JSON.parse(i).url);
    const indexPlanets = planets.map(e => listUrl.indexOf(e));
    const result = await Promise.all(
      planets.map(async (e, i) => {
        if (indexPlanets[i] > -1) {
          return [...allPlanets][indexPlanets[i]];
        } else {
          const response = await fetch(e);
          const json = await response.json();
          return JSON.stringify(json);
        }
      })
    );
    dispatch({
      type: "ADD",
      payload: {
        currentFilm: episode_id,
        currentPlanets: planets,
        additionalPlanets: result
      }
    });
    // remove loading
    dispatchLoading(false);
  };

  return (
    <WrappedComponent
      {...props}
      currentFilm={currentFilm}
      handleClick={handleClick}
    />
  );
};
