import React from "react";
import Card from "./card";

const CardList = ({ robots }) => {
  const cardArrays = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardArrays}</div>;
};

export default CardList;
