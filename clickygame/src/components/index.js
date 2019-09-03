import React from "react";


let styles = {
    headerStyle: {
        background: "#5133A4",
      },
      headingStyle: {
        fontSize: 50,
        padding: "20px",
      },
      h5:{
        fontSize:30,
        padding : "20px"
      },
    navbarStyle: {
        background: "green",
        fontSize: 20
    },
    
    sectionStyles: {
        background: "orange"
    }
    
}

function ClickyGame(props){
  // const [score, highscore] = useState(0);
    return(
        <>
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Clicky Game</h1>
      <h5 style={styles.h5}>Click on an image to earn points, but don't click on any more than once!</h5>
    </header>

    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Reset the game</a>
      Score: 0 | Top-Score: 0
    </nav>

    <section style={styles.sectionStyles} className="section">
      <div className="card">
      <img className="card-img-top" src={props.image} alt={props.name}/>
      </div>
    </section>

        </>
    );
}

export default ClickyGame;