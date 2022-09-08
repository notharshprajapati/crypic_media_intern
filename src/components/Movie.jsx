import React from "react";
import { motion } from "framer-motion";

const Movie = ({ movie }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
    >
      <a href={movie.show.url} target="_blank" rel="noreferrer">
        <span>{movie.show.name}</span>
        <img src={movie.show.image.medium} alt={movie.show.name} />
      </a>
    </motion.div>
  );
};

export default Movie;
