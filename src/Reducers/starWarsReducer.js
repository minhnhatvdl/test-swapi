const starWarsReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const { currentFilm, currentPlanets, additionalPlanets } = action.payload;
      return {
        currentFilm,
        currentPlanets,
        allPlanets: new Set([...state.allPlanets, ...additionalPlanets])
      };
    default:
      return state;
  }
};

export default starWarsReducer;
