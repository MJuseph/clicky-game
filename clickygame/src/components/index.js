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
        background: "#2C323C",
        fontSize: 20,
        color: "white"
    },
    
    sectionStyles: {
        background: "orange"
    },
    img:{
      width: "150px"
    }, 
    imgwrapper: {
      display: "inline-block",
      padding: "10px",
      margin:"50px"
      },
    
    
}

function ClickyGame(props){
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
     
      {props.charachters.map(charachter => ( <div style={styles.imgwrapper} className="card">
        <div style={styles.imgwrappersm}>
         <img style={styles.img} className="card-img-top img-thumbnail" src={charachter.image} alt={charachter.name}/>
         </div>
      </div>) )}

    </section>

      


      </>
    );
}

export default ClickyGame;