import React from "react";
import styled from "styled-components";

const Genres = ({ genres }) => {
  return (
    <Wrapper>
      <div className="genres">
        {genres.map((genre) => (
          <h5
            className="btn"
            style={{
              marginLeft: "1rem",
            }}
          >
            {genre}
          </h5>
        ))}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .genres {
    display: flex;
    justify-content: center;
    padding-left: 1rem;
  }
`;

export default Genres;
