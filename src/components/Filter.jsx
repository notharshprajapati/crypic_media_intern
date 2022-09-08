import React, { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("0");
  const [curr, setCurr] = useState("0");

  const filters = [
    { name: "Anime", value: "1" },
    { name: "Children", value: "2" },
    { name: "Comedy", value: "3" },
    { name: "Drama", value: "4" },
    { name: "Horror", value: "5" },
    { name: "Legal", value: "6" },
    { name: "Medical", value: "7" },
    { name: "Music", value: "8" },
    { name: "Sports", value: "9" },
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
    setCurr(activeGenre.value);
  }, [activeGenre]);

  return (
    <div>
      <ButtonGroup className="mb-2">
        <ToggleButton
          type="radio"
          variant="primary"
          name="radio"
          value="All"
          checked={activeGenre === "All"}
          onClick={() => setActiveGenre("All")}
        >
          All
        </ToggleButton>
        {filters.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="primary"
            name="radio"
            value={radio.value}
            checked={activeGenre === radio.name}
            onClick={() => setActiveGenre(radio.name)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Filter;
