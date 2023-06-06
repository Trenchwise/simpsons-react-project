import React, { Component } from "react";

class Name extends Component {
  render() {
    const { like, character, onLikeToggle, id } = this.props;

    return (
      <div>
        <h1>{character}</h1>
        <button onClick={() => onLikeToggle(id)}>
          {like ? "Liked" : "Not liked"}
        </button>
      </div>
    );
  }
}

export default Name;
