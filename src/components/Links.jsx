import React from "react";

const Links = ({ url, name }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="btn">
      {name}
    </a>
  );
};

export default Links;
