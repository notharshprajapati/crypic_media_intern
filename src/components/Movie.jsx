import React from "react";

const Movie = ({ movie }) => {
  return (
    <a href={movie.show.url} target="_blank" rel="noreferrer">
      <span>{movie.show.name}</span>
      <img src={movie.show.image.medium} alt={movie.show.name} />
    </a>
  );
};

export default Movie;
