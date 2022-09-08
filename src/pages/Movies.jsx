import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Filter from "../components/Filter";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Movies = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("All");

  const fetchPopular = async () => {
    const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const movies = await data.json();
    setPopular(movies);
    setFiltered(movies);
    console.log(movies);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <Wrapper>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.show.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .popular-movies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 1rem;
    row-gap: 2rem;
  }
`;

export default Movies;
