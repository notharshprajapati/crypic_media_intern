import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <Wrapper>
      <div className="overlay" />
      <div className="modal">
        <div className="close">
          <button
            className="btn"
            style={{ margin: "0.5rem" }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="form"> {children}</div>
      </div>
    </Wrapper>,
    document.getElementById("portal")
  );
}

const Wrapper = styled.main`
  .form {
    margin: 1rem 2rem 2rem 2rem;
  }
  .close {
    display: flex;
    justify-content: flex-end;
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 0.5rem;

    z-index: 1000;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  }
`;
