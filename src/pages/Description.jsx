import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const Description = () => {
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();
  const fetchSingle = async () => {
    try {
      const data = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const movie = await data.json();
      setMovieData(movie);
      setLoading(false);
    } catch (e) {
      navigate("/notfound");
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchSingle();
  }, [id]);

  return (
    <div>
      <Link to={`/`}>Home</Link>
      {loading && <h1>loading...</h1>}
      {!loading && (
        <Wrapper>
          <div>
            <div>
              <img src={movieData.image.original} alt={movieData.name} />
              <section>
                <h2>{movieData.name}</h2>
                <h5> id : {movieData.id}</h5>
                <a href={movieData.url} target="_blank" rel="noreferrer">
                  link
                </a>
                <h5> type : {movieData.type}</h5>
                <h5> language : {movieData.language}</h5>
                <p dangerouslySetInnerHTML={{ __html: movieData.summary }} />
                {movieData.genres}
                <p> status : {movieData.status}</p>
                <p> runtime : {movieData.runtime}</p>
                <p> averageRuntime : {movieData.averageRuntime}</p>
                <p> premiered : {movieData.premiered}</p>
                <p> ended : {movieData.ended ? "Still running" : "Yes"}</p>
                <a
                  href={movieData.officialSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  officialSite
                </a>
                <p>
                  schedule : {movieData.schedule.time},{movieData.schedule.days}
                </p>

                <p> rating : {movieData.rating.average}</p>
              </section>
            </div>
          </div>
        </Wrapper>
      )}
    </div>
  );
};

const Wrapper = styled.main``;

export default Description;
