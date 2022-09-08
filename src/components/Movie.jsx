import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <Wrapper>
      <Link to={`/${movie.show.id}`} className="link">
        <img src={movie.show.image.medium} alt={movie.show.name} />
        <h2>{movie.show.name}</h2>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 0.8rem;
    text-align: center;
    color: orange;
    
  }
`;

export default Movie;
