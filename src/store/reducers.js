const initialState = {
  favoriteCompanies: [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favoriteCompanies: [...state.favoriteCompanies, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favoriteCompanies: state.favoriteCompanies.filter(
          (company) => company !== action.payload
        ),
      };
    default:
      return state;
  }
};
