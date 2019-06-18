import React from "react";
import {
  planetItem,
  planetItemBody,
  planetItemTitle,
  listGroup,
  listGroupItem,
  badge,
  animationFloat
} from "./Planet.module.css";

const Planet = ({ name, climate, population, terrain, gravity, url }) => {
  const infosPlanet = { climate, population, terrain, gravity, url };
  return (
    <div className={`${planetItem} ${animationFloat}`}>
      <div className={planetItemBody}>
        <h4 className={planetItemTitle}>{name}</h4>
      </div>
      <ul className={`${listGroup}`}>
        {Object.keys(infosPlanet).map(
          i =>
            infosPlanet[i] &&
            infosPlanet[i] !== "unknown" && (
              <li key={i} className={listGroupItem}>
                <span className={badge}>{i}</span> {infosPlanet[i]}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Planet;
