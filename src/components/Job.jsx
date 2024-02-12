import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/actions";

import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favoriteCompanies);
  const isFavorite = favorites.includes(data.company_name);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(data.company_name));
    } else {
      dispatch(addFavorite(data.company_name));
    }
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <Button
          onClick={handleFavoriteToggle}
          variant={isFavorite ? "danger" : "primary"}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
