import React, { useEffect } from "react";
import styled from "styled-components";

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
  const filters = [
    "Anime",
    "Children",
    "Comedy",
    "Drama",
    "Horror",
    "Legal",
    "Medical",
    "Music",
    "Sports",
  ];

  useEffect(() => {
    if (activeGenre === "All") {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.show.genres.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <Wrapper>
      <div className="filter-container">
        <button
          className={activeGenre === "All" ? "active" : ""}
          onClick={() => setActiveGenre("All")}
        >
          All
        </button>
        {filters.map((filter, i) => {
          return (
            <button
              key={i}
              className={activeGenre === filter ? "active" : ""}
              onClick={() => setActiveGenre(filter)}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .filter-container button {
    margin-right: 1vh;
    margin-bottom: 1vh;
    min-width: 5rem;
    padding: 0.5rem 1rem;
    border: none;
    background: white;
    color: rgh(65, 98, 168);
    border-radius: 1rem;
    border: 2px solid rgb(53, 38, 28);
    font-weight: bold;
    cursor: pointer;
  }

  button.active {
    background: rgb(217, 115, 60);
    color: white;
  }
`;
export default Filter;
