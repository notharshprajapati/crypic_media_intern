import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import "./App.css";
import Filter from "./components/Filter";

const App = () => {
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
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      {filtered.map((movie) => {
        return <Movie key={movie.show.id} movie={movie} />;
      })}
    </div>
  );
};

export default App;
