import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );

    // adding a unique ID to each character
    data.forEach((element, index) => {
      element.id = index + Math.random() + index;
    });

    this.setState({ simpsons: data });
  }

  //Updates the state for the specific character to make it liked or disliked
  onLikeToggle = (id) => {
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id;
    });

    const simpsons = [...this.state.simpsons];

    simpsons[indexOf].liked = true;

    console.log(simpsons);
  };

  onDelete = (id) => {
    // I need help to understand this bit
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id;
    });

    const copy = [...this.state.simpsons]; // This makes a copy of the state
    copy.splice(indexOf, 1); // This spices at position one in the index
    this.setState({ simpsons: copy }); // This tells React to update the copy
  };

  render() {
    const { simpsons } = this.state;

    if (!simpsons) return <Loading />; //This checks that there is data

    if (simpsons.lenth === 0) return <p>You have deleted everything</p>;

    return (
      <>
        <h1>Total no of liked chars #</h1>
        <Simpsons
          simpsons={simpsons}
          onDelete={this.onDelete}
          onLikeToggle={this.onLikeToggle}
        />
      </>
    );
  }
}

export default App;
