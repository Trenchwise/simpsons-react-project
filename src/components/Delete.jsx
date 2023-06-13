import React, { Component } from "react";

const Delete = (props) => {
  const { onDelete, id } = this.props;
  return (
    <div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Delete;
