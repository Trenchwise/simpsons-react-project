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

  onDelete = (id) => {
    // I need help to understand this bit
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id;
      // char.quote === quote && char.character === character;
    });

    const copy = [...this.state.simpsons]; // This makes a copy of the state
    copy.splice(indexOf, 1); // This spices at position one in the index
    this.setState({ simpsons: copy }); // This tells React to update the copy

    // Can also write the above like this
    // const simpsons = [...this.state.simpsons]
    // `    // simpsons.splice(index, 1)
    //     // this.setState({simpsons})
  };

  render() {
    const { simpsons } = this.state;

    if (!simpsons) return <Loading />;

    return (
      <>
        <h1>Total no of liked chars #</h1>
        <Simpsons simpsons={simpsons} onDelete={this.onDelete} />
        {/* This passes into simpsons the onDelete, the simpsons component now has access to the onDelete function */}
      </>
    );
  }
}

export default App;
