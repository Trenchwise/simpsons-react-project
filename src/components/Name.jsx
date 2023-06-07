import React, { Component } from "react";

class Name extends Component {
  render() {
    const { liked, character, onLikeToggle, id } = this.props;
    // the name component now

    return (
      <div>
        <h1>{character}</h1>
        <button onClick={() => onLikeToggle(id)}>
          {liked ? "Liked" : "Not liked"}
          {/* // if liked is true otherwise not liked */}
        </button>
      </div>
    );
  }
}

export default Name;

// The name component recieved whether it is like and also has function to update the data living inside the parent
