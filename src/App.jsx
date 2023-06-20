import React, { useEffect, useState } from "react";
import axios from "axios";
import Simpsons from "./components/Simpsons";
import "./App.css";

// import Loading from "./components/Loading";
// import Search from "./components/Search";

const App = () => {
  const [simpsons, setSimpsons] = useState(); //The box that holds the data
  const [character, setCharacter] = useState(); //To ask the API to filter characters

  const getData = async () => {
    // The function that gets the data

    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
    // adding a unique ID to each character
    data.forEach((element, index) => {
      element.id = index + Math.random() + index;
    });
    setSimpsons(data);
  };

  useEffect(() => {
    getData();
  }, []); // [] means run once

  const onDelete = (id) => {
    const indexOf = simpsons.findIndex((char) => {
      return char.id === id;
    });

    const copy = [...simpsons]; // This makes a copy of the state
    copy.splice(indexOf, 1); // This spices at position one in the index
    setSimpsons(copy); // This tells React to update the copy
  };

  //Updates the state for the specific character to make it liked or disliked
  const onLikeToggle = (id) => {
    const indexOf = simpsons.findIndex((char) => {
      return char.id === id;
    });

    const copy = [...simpsons];

    copy[indexOf].liked = !copy[indexOf].liked;

    setSimpsons(copy);
  };

  console.log(simpsons);

  if (!simpsons) return <h1>Loading</h1>; //loading message, if there is no weather data return loading

  return (
    <Simpsons
      onLikeToggle={onLikeToggle}
      onDelete={onDelete}
      simpsons={simpsons}
    />
  );
};

export default App;

//     this.setState({ simpsons: data });
//     // console.log(data);
//   }

//   // Function that listens for text going into text box
//   onSearchInput = (e) => {
//     this.setState({ searchInput: e.target.value });
//   };

// render() {
//   console.log(this.state);
//   const { simpsons } = this.state;

//   if (simpsons.lenth === 0) return <p>You have deleted everything</p>;

//   // Calculates the number of likes characters
//   let total = 0;
//   simpsons.forEach((char) => {
//     if (char.liked) total++;
//   });
// simpsons.length = 1;

// //     //Come back to this
// //     //Calculates the the data we want to show/filter
// //     //remove characters that are now in the search term
// //     // const filtered = character.filter((character) => {
// //     //   return character.character
// //     //     .toLowerCase()
// //     //     .includes(searchTerm ? searchTerm.toLowerCase() : "");
// //     // });

// //     return (
// //       <>
// //         <h1>Total no of liked chars #{total}</h1>
// //         <Search onSearchInput={this.onSearchInput} />
// //         <Simpsons
// //           simpsons={simpsons}
// //           onDelete={this.onDelete} //why is this yellow and not blue?
// //           onLikeToggle={this.onLikeToggle}
// //           onSearchInput={this.onSearchInput}
// //         />
// //       </>
// //     );
// //   }

// // export default App;
