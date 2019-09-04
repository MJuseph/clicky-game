import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title"
import friends from "./friends.json";

/* any simple function components can be placed here [or imported from other files] */
function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
     </div>
  );
}

/* actual app component, as a class as it uses states */
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highScore: 0,
    maxScore: 12
  };
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle = (friends)=> {
  //     let j, x, i;
  //     for (i = friends.length - 1; i > 0; i--) {
  //         j = Math.floor(Math.random() * (i + 1));
  //         x = friends[i];
  //         friends[i] = friends[j];
  //         friends[j] = x;
  //     }
  // }
  

  // Map over this.state.friends and render a FriendCard component for each friend object
  // gameOver = () =>{
  //   if({this.state.score}>12){

  //   }
  // }
  render() {
    return (
      <div class="wrapper">
        <nav class="navbar">
      <a class= "resetGame" href="/">Reset the game</a>
      Score: {this.state.score} | Top-Score: {this.state.highScore}
    </nav>
        <h1 className="title">Clicky-Game</h1>
        {this.state.friends.map(friend => (
         <button onClick={this.handleIncrement}>
         <FriendCard
            // shuffle = {this.shuffle}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
          </button>
        ))}
      </div>
    );
  }
}

export default App;
