import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Genres from "../components/Genres";
import Info from "../components/Info";
import Links from "../components/Links";
import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";

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
      {loading && <h1>loading...</h1>}
      {!loading && (
        <Wrapper>
          <div className="section section-center page">
            <Link to="/" className="btn">
              back to List
            </Link>
            <div className=" product-center">
              <div>
                <ProductImages image={movieData.image.original} />
                <div className="name_star">
                  <h2>{movieData.name}</h2>
                  <Stars stars={movieData.rating.average / 2} />
                </div>
                <Genres genres={movieData.genres} />
              </div>
              <section className="content">
                <p
                  className="desc"
                  dangerouslySetInnerHTML={{ __html: movieData.summary }}
                />
                <Info movieData={movieData} />
                <hr />
                <div className="links">
                  <Links url={movieData.url} name="Read More..." />
                  <Links url={movieData.officialSite} name="Official Site" />
                </div>
              </section>
            </div>
          </div>
        </Wrapper>
      )}
    </div>
  );
};

const Wrapper = styled.main`
  .links {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
  }

  .name_star {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
  }

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }

  .desc {
    line-height: 2;
    max-width: 45em;
    text-align: justify;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default Description;
