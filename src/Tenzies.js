import React from "react"

export default function Tenzies(props) {

    const style = props.tenzies ? {padding: "2em 1em", border: "0.7em solid #bdc3c7", height: "25em"} : {padding: "0", border: "none", height: "0"};

    return(
        <div className="tenzies" style={style}>
            <h1>Tenzies!!!</h1>
            <button onClick={props.restart}>Restart Game</button>
        </div>

    )
} 