import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";
import Search from "./components/Search";

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
    // console.log(data);
  }

  //Updates the state for the specific character to make it liked or disliked
  onLikeToggle = (id) => {
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id;
    });

    const simpsons = [...this.state.simpsons];

    simpsons[indexOf].liked = !simpsons[indexOf].liked;

    this.setState({ simpsons });
  };

  onDelete = (id) => {
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id;
    });

    const copy = [...this.state.simpsons]; // This makes a copy of the state
    copy.splice(indexOf, 1); // This spices at position one in the index
    this.setState({ simpsons: copy }); // This tells React to update the copy
  };

  // Function that listens for text going into text box
  onSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    console.log(this.state);
    const { simpsons } = this.state;

    if (!simpsons) return <Loading />; //This checks that there is data

    if (simpsons.lenth === 0) return <p>You have deleted everything</p>;

    // Calculates the number of likes characters
    let total = 0;
    simpsons.forEach((char) => {
      if (char.liked) total++;
    });
    // simpsons.length = 1;

    //Come back to this
    //Calculates the the data we want to show/filter
    //remove characters that are now in the search term
    const filtered = characters.filter((character) => {
      return character.character
        .toLowerCase()
        .includes(searchTerm ? searchTerm.toLowerCase() : "");
    });

    return (
      <>
        <h1>Total no of liked chars #{total}</h1>
        <Search onSearchInput={this.onSearchInput} />
        <Simpsons
          simpsons={simpsons}
          onDelete={this.onDelete} //why is this yellow and not blue?
          onLikeToggle={this.onLikeToggle}
          onSearchInput={this.onSearchInput}
        />
      </>
    );
  }
}

export default App;
