import React from "react"

export default function Header(props) {

    const [play, setPlay] = React.useState({plays: 2, bestTime: "15 minutes", leastRoll: 12, highestTime: 15, highestRoll: 15})

    const {plays,bestTime,leastRoll,highestTime,highestRoll} = play

    return (
      <header>

<div className="scoreboard">
          <h3>Total played</h3>
          <div className="number">{plays && "?"}</div>
        </div>

        <div className="scoreboard">
          <h3>Your best time</h3>
          <div className="number">{bestTime && "?"}</div>
        </div>
  
        <div className="scoreboard">
          <h3>Your least roll</h3>
          <div className="number">{leastRoll && "?"}</div>
        </div>
        
        <div className="scoreboard">
          <h3>Your highest roll</h3>
          <div className="number">{highestTime && "?"}</div>
        </div>
        
        <div className="scoreboard">
          <h3>Your highest roll</h3>
          <div className="number">{highestRoll && "?"}</div>
        </div>
      </header>
    );
  }