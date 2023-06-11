import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";
import Search from "./Search";

class Character extends Component {
  render() {
    const { character, quote, image, id, characterDirection, liked } =
      this.props.item;
    const { onLikeToggle, onDelete } = this.props;

    //Character splits apart the state into the above

    return (
      <div className="characterContainer">
        <Name
          character={character}
          onLikeToggle={this.props.onLikeToggle}
          id={id}
          liked={liked}
        />
        <Image image={image} />
        <Quote quote={quote} />
        <Delete onDelete={this.props.onDelete} id={id} />
        
      </div>
    );
  }
}

//     return (
//       <div className="characterContainer">
//         <Name character={character} onLikeToggle={this.onLikeToggle} id={id} />
//         <Quote quote={quote} />
//         <Image image={image} />
//         <Delete onDelete={this.props.onDelete} id={id} />
//       </div>
//     );
//   }
// }

export default Character;
