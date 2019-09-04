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
  // handleIncrement = () => {
  //   this.setState({ score: this.state.score + 1 });
  // };

  // shuffle = (friends)=> {
  //     let j, x, i;
  //     for (i = friends.length - 1; i > 0; i--) {
  //         j = Math.floor(Math.random() * (i + 1));
  //         x = friends[i];
  //         friends[i] = friends[j];
  //         friends[j] = x;
  //     }
  // }
  // gameOver = () => {
  //   if (this.state.score > this.state.highscore) {
  //     this.setState({highscore: this.state.score}, function() {
  //       console.log(this.state.highscore);
  //     });
  //   }
  //   this.state.cards.forEach(friend => {
  //     friend.count = 0;
  //   });
  //   alert(`Game Over :( \nscore: ${this.state.score}`);
  //   this.setState({score: 0});
  //   return true;
  // }
  
  shuffle = function shuffle(friends) {
    var i,
        j,
        temp;
    for (i = friends.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = friends[i];
        friends[i] = friends[j];
        friends[j] = temp;
    }
    return friends;    
};

  click = id => {
    const shuffles = this.shuffle(friends);
    this.setState({friends: shuffles});

    // const over = this.gameOver();
    // this.setState({friends: over});

    if (this.state.id){
      console.log(this.click)
      this.setState({
        score: this.state.score + 1,
        clicked: true,
      });
    }else{
      this.setState({
        clicked:true,
        score: this.state.score+1
      });
      // this.state.gameOver();
    }
    if (this.state.score > this.state.highScore){
      this.setState({highScore: this.state.score});
    }
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  // gameOver = () =>{
  //   if(this.state.score > 12){
  //     alert("gameOver");
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
         <button onClick={this.click}>
         <FriendCard
            // shuffle = {this.shuffle}
            // click= {this.click}
            // gameOver = {this.gameOver}
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
