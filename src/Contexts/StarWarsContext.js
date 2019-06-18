import { createContext } from "react";

const StarWarsContext = createContext({
  films: {},
  starWars: {},
  dispatch: () => {},
  dispatchLoading: () => {}
});

export default StarWarsContext;
