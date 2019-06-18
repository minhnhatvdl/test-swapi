import React from "react";
import {
  filmItem,
  filmItemTitle,
  filmItemText,
  filmItemTextField,
  filmItemActive,
  animationBorderBottom
} from "./Film.module.css";

const Film = ({
  episode_id,
  title,
  director,
  producer,
  currentFilm,
  handleClick
}) => (
  <li
    className={`${filmItem} ${animationBorderBottom} ${currentFilm ===
      episode_id && filmItemActive}`}
    onClick={handleClick}
  >
    <h4 className={filmItemTitle}>{title}</h4>
    <p className={filmItemText}>
      <b className={filmItemTextField}>Director :</b>{" "}
      <span className={filmItemTextField}>{director}</span>
    </p>
    <p className={filmItemText}>
      <b className={filmItemTextField}>Producer :</b>{" "}
      <span className={filmItemTextField}>{producer}</span>
    </p>
  </li>
);

export default Film;
