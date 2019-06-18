import React, { useContext } from "react";
import Film from "../Film/Film";
import StarWarsContext from "../../Contexts/StarWarsContext";
import { withClickFilm } from "../../HOCs/withClickFilm";
import { blockFilms, listFilmsHeader, listFilms } from "./Films.module.css";

const Films = () => {
  const { films } = useContext(StarWarsContext);
  const FilmWithHandleClick = withClickFilm(Film);
  return (
    <div className={blockFilms}>
      <div className={listFilmsHeader}>
        <h3>Films</h3>
      </div>
      <ul className={listFilms}>
        {films.count > 0 &&
          films.results.map(e => (
            <FilmWithHandleClick key={e.episode_id} {...e} />
          ))}
      </ul>
    </div>
  );
};

export default Films;
