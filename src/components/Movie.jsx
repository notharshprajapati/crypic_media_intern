import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <Wrapper>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
      >
        <Link to={`/${movie.show.id}`} className="link">
          <h2>{movie.show.name}</h2>
          <img src={movie.show.image.medium} alt={movie.show.name} />
        </Link>
      </motion.div>
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
  }
`;

export default Movie;
