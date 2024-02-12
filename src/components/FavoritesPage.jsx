import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites.favoriteCompanies);

  return (
    <div>
      <h2>Favorite Companies</h2>
      <ul>
        {favorites.map((company) => (
          <li key={company}>
            <Link to={`/${company}`}>{company}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesPage;
