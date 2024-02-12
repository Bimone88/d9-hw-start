export const addFavorite = (company) => ({
  type: "ADD_FAVORITE",
  payload: company,
});

export const removeFavorite = (company) => ({
  type: "REMOVE_FAVORITE",
  payload: company,
});
