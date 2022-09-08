import React, { useEffect } from "react";

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
  );
};

export default Filter;
