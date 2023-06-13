import React, { Component } from "react";

const Search = (props) => {
  return (
    <>
      <input onInput={props.onSearchInput} type="text" />
    </>
  );
};

export default Search;
