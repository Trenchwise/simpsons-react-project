import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    this.setState({ simpsons: data });
  }

  render() {
    const { simpsons } = this.state;

    // Conditional rendering

    if (!simpsons) return <Loading />; // This (turnary) will show loading while data is loading. But right now it is pointing to the Loading component

    return (
      <>
        <h1>Total no of liked chars #</h1>
        <Simpsons simpsons={simpsons} />
      </>
    );
  }
}

export default App;
