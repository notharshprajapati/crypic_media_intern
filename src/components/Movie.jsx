import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Movie = ({ movie }) => {
  return (
    <Wrapper>
      <Link to={`/${movie.show.id}`} className="link">
        <Card>
          <Card.Img variant="top" src={movie.show.image.medium} />
          <Card.Body>
            <Card.Title>{movie.show.name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default Movie;
