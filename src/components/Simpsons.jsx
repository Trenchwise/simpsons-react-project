import React from "react";
import Character from "./Character";

const Simpsons = (props) => {
  const { simpsons, onDelete, onLikeToggle, onSearchInput } = props;
  console.log("I work");

  return (
    <>
      {simpsons.map((item, index) => {
        return (
          <Character
            item={item}
            key={item.id}
            onDelete={onDelete}
            onLikeToggle={onLikeToggle}
            onSearchInput={onSearchInput}
          />
        );
      })}
    </>
  );
};

export default Simpsons;
