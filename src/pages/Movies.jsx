import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Filter from "../components/Filter";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Movies = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("All");

  const fetchPopular = async () => {
    const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const movies = await data.json();
    setPopular(movies);
    setFiltered(movies);
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
      <Row xs={2} md={5} className="g-4">
        {filtered.map((movie) => {
          return (
            <Col>
              <Movie key={movie.show.id} movie={movie} />
            </Col>
          );
        })}
      </Row>
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
