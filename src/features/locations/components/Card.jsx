import React from "react";

const Card = ({ Countries }) => {
  const { name, flag } = Countries;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // gap: "4px",
        justifyContent: "center",
        alignItems: "center",

        height: "200px",
        width: "200px",
        border: "1px solid black",
        borderRadius: "1rem",
      }}
    >
      <img src={flag} alt={name} width={"100px"} height={"100px"} />

      <h3>{name}</h3>
    </div>
  );
};

export default Card;
