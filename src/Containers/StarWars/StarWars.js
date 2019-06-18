import React, { useState, useEffect, useReducer, useMemo } from "react";
import Films from "../../Components/Films/Films";
import Planets from "../../Components/Planets/Planets";
import Header from "../../Components/Header/Header";
// api
import { apiFilms } from "../../Constants/api";
// hook
import { useFetch } from "../../Hooks/useFetch";
// reducer
import starWarsReducer from "../../Reducers/starWarsReducer";
// context
import StarWarsContext from "../../Contexts/StarWarsContext";
import ThemeContext from "../../Contexts/ThemeContext";
// loading
import Loading from "../../Components/Loading/Loading";
// css
import { page, main } from "./StarWars.module.css";

const StarWars = () => {
  // fetch data
  const [films, loading, dispatchLoading] = useFetch(apiFilms, {});
  // starWarsReducer
  const [starWars, dispatch] = useReducer(starWarsReducer, {
    currentFilm: null,
    currentPlanets: [],
    allPlanets: new Set()
  });
  // theme
  const [theme, setTheme] = useState("light");
  // handle theme
  useEffect(() => {
    const handleTheme = () => {
      console.log("handle theme");
      document.documentElement.classList.add("animationColorTheme");
      document.documentElement.setAttribute("data-theme", theme);
      window.setTimeout(() => {
        document.documentElement.classList.remove("animationColorTheme");
      }, 500);
    };
    handleTheme();
  }, [theme]);
  // render
  return (
    <div className={page}>
      {loading && <Loading />}
      {useMemo(
        () => (
          <ThemeContext.Provider value={{ setTheme }}>
            <Header />
          </ThemeContext.Provider>
        ),
        []
      )}
      {useMemo(
        () =>
          !loading &&
          films.count > 0 && (
            <StarWarsContext.Provider
              value={{ films, starWars, dispatch, dispatchLoading }}
            >
              <div className={main}>
                <Films />
                {starWars.currentFilm && <Planets />}
              </div>
            </StarWarsContext.Provider>
          ),
        [loading]
      )}
    </div>
  );
};

export default StarWars;
