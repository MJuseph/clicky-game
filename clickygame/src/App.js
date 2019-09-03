import React from 'react';
import './App.css';
import ClickyGame from './components/index';
import charachters from './charachters.json';



function App() {
  return (
    <>
    <div className="App">
      < ClickyGame charachters={charachters}/> 
    </div>
    </>
  );
}

















































































































// class App extends React.Component {
//   // Setting this.state.charachters to the charachters json array
//   state = {
//     charachters,
//     score: 0,
//     highscore: 0
//   };

//   gameOver = () => {
//     if (this.state.score > this.state.highscore) {
//       this.setState({highscore: this.state.score}, function() {
//         console.log(this.state.highscore);
//       });
//     }
//     this.state.charachters.forEach(charachter => {
//       charachter.count = 0;
//     });
//     alert(`Game Over :( \nscore: ${this.state.score}`);
//     this.setState({score: 0});
//     return true;
//   }

//   clickCount = id => {
//     this.state.charachters.find((o, i) => {
//       if (o.id === id) {
//         if(charachters[i].count === 0){
//           charachters[i].count = charachters[i].count + 1;
//           this.setState({score : this.state.score + 1}, function(){
//             console.log(this.state.score);
//           });
//           this.state.charachters.sort(() => Math.random() - 0.5)
//           return true; 
//         } else {
//           this.gameOver();
//         }
//       }
//     });
//   }
//   // Map over this.state.charachters and render a charachtercharachter component for each charachter object
//   render() {
//     return (
//       <Section>
//         <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
//         {this.state.charachters.map(charachter => (
//           <charachter
//             clickCount={this.clickCount}
//             id={charachter.id}
//             key={charachter.id}
//             image={charachter.image}
//           />
//         ))}
//       </Section>
//     );
//   }
// }


export default App;
