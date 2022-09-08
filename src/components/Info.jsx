import React from "react";
import styled from "styled-components";

const Info = ({ movieData }) => {
  return (
    <Wrapper>
      <div className="info_grid">
        <p className="info">
          <span>id : {movieData.id}</span>
        </p>
        <p className="info">
          <span>type : {movieData.type}</span>
        </p>
        <p className="info">
          <span>language : {movieData.language}</span>
        </p>
        <p className="info">
          <span>status : {movieData.status}</span>
        </p>

        <p className="info">
          <span>averageRuntime : {movieData.averageRuntime}</span>
        </p>
        <p className="info">
          <span>premiered : {movieData.premiered}</span>
        </p>
        <p className="info">
          <span>ended : {movieData.ended ? "Still running" : "Yes"}</span>
        </p>
        <p className="info">
          <span>
            schedule : {movieData.schedule.time} ,{movieData.schedule.days}
          </span>
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .info_grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    font-weight: 700;
  }
`;
export default Info;
