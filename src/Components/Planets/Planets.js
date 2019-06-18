import React, { useContext, memo } from "react";
import Planet from "../Planet/Planet";
import StarWarsContext from "../../Contexts/StarWarsContext";
import { blockPlanets, headerPlanets, listPlanets } from "./Planets.module.css";

const Planets = () => {
  const { starWars } = useContext(StarWarsContext);
  const { currentPlanets, allPlanets } = starWars;
  // get infos of planets
  const getInfosPlanets = (acc, value, index) =>
    currentPlanets.includes(JSON.parse(value).url)
      ? [...acc, <Planet key={index} {...JSON.parse(value)} />]
      : acc;
  return (
    currentPlanets.length > 0 && (
      <div className={blockPlanets}>
        <div className={headerPlanets}>
          <h2>{currentPlanets.length} Planets</h2>
        </div>
        <div className={listPlanets}>
          {[...allPlanets].reduce(getInfosPlanets, [])}
        </div>
      </div>
    )
  );
};

export default memo(Planets);
