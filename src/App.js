import React, { Component } from "react";

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
    highScore: localStorage.highScore,
    maxScore: 12
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    friends.click= false;
    alert(`Game Over :(`);
    this.setState({score: 0});
    localStorage.highScore = this.state.score
    window.location.reload();

    return true;
  }

  
  
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

  clicked = id => {
    console.log (` friends: id=${id} `, friends);

    const idx = friends.findIndex( f => f.id === id );
    
    if( friends[idx].click === true){
      const over = this.gameOver();
      this.setState({over});
    }else{
      friends[idx].click= true;
      this.setState({score: this.state.score+1});
      
      const shuffles = this.shuffle(friends);
      this.setState({friends: shuffles});
    }

  }


  
  render() {
    return (
      <div class="wrapper">
        <nav class="navbar">
      <a class= "resetGame" href="/">Reset the game</a>
      Score: {this.state.score} | Top-Score: {this.state.highScore}
    </nav>
        <h1 className="title">Clicky-Game</h1>
        {this.state.friends.map(friend => (
         <button onClick={()=>this.clicked(friend.id)}>
         <FriendCard
        
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
