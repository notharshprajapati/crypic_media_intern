import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "./Modal.css";

const ModalForm = ({ movieName }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const Data = {
      name: name,
      age: age,
      email: email,
      movie: movieName,
    };

    localStorage.setItem(Date().toLocaleString(), JSON.stringify(Data));

    setName("");
    setAge(0);
    setEmail("");
    setBooked(true);
  };

  return (
    <Wrapper>
      {!booked && (
        <form className="contact__form" onSubmit={SubmitHandler}>
          <div className="contact__form-div">
            <label className="contact__form-tag">Name</label>
            <input
              type="text"
              placeholder="Insert your name"
              className="contact__form-input"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="contact__form-div">
            <label className="contact__form-tag">Age</label>
            <input
              type="number"
              placeholder="Insert your Age"
              className="contact__form-input"
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="contact__form-div">
            <label className="contact__form-tag">Email</label>
            <input
              type="email"
              placeholder="Insert your Email"
              className="contact__form-input"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="contact__form-div">
            <label className="contact__form-tag">Movie</label>
            <input
              type="email"
              value={movieName}
              placeholder="Insert your Email"
              className="contact__form-input"
              disabled
            />
          </div>
          <input className="btn" type="submit" value="Book" />
        </form>
      )}
      {booked && (
        <h1>
          Your selected movie <br />
          is booked
        </h1>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .topButtons {
    position: fixed;
    right: 0;
    top: 0;
    padding: 1rem;
  }
  .contact__title {
    text-align: center;
    font-size: var(--h3-font-size);
    margin-bottom: 1.5rem;
  }
  .contact__form-div {
    position: relative;
    margin-bottom: 1.5rem;
    height: 4rem;
  }
  .contact__form-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid var(--clr-primary-5);
    background: none;
    color: var(--text-color);
    outline: none;
    padding: 1.5rem;
    border-radius: 0.75rem;
    z-index: 1;
  }
  .contact__form-tag {
    position: absolute;
    top: -0.75rem;
    left: 1.25rem;
    font-size: var(--smaller-font-size);
    padding: 0.25rem;
    background-color: white;
    z-index: 10;
  }
  @media screen and (min-width: 576px) {
    .contact__form {
      width: 360px;
      margin: 0 auto;
    }
  }
`;

export default ModalForm;
