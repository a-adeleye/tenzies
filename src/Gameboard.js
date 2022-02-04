import React from "react";
import {nanoid} from "nanoid"

function Die1(props) {
  return (
    <div className="die1" onClick={props.clickHandler}>
      <span className="dot"></span>
    </div>
  );
}

function Die2() {
  return (
    <div className="die2">
      <span className="dot"></span>
      <span
        className="dot"
        style={{
          justifySelf: "end",
        }}
      ></span>
    </div>
  );
}

function Die3() {
  return (
    <div className="die3">
      <span className="dot"></span>
      <span
        className="dot"
        style={{
          justifySelf: "center",
        }}
      ></span>
      <span
        className="dot"
        style={{
          justifySelf: "right",
        }}
      ></span>
    </div>
  );
}

function Die4() {
  return (
    <div className="die4">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
}

function Die5(props) {
  return (
    <div className="die5" style={{ backgroundColor: `${props.style}` }}>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
}

function Die6() {
  return (
    <div className="die6">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
}

function Instruction() {
  return (
    <div className="instruction">
      <h2>Tenzies</h2>
      <p>
        Roll until all dice are the same. Click each die to freeze it as its
        current value between rolls
      </p>
    </div>
  );
}

function Gameboard() {
  const [dice, setDice] = React.useState({
    value: "",
    isHeld: false,
    id: nanoid()
  });

function holdDice() {
    console.log("Clicked")
}


  return (
    <main>
      <div className="box">
        <Instruction></Instruction>
        <div className="dice">
          <Die1 clickHandler={holdDice}></Die1>
          <Die2></Die2>
          <Die3></Die3>
          <Die4></Die4>
          <Die5 style={"red"} clickHandler={holdDice}></Die5>
          <Die6></Die6>
          <Die4></Die4>
          <Die5></Die5>
          <Die6></Die6>
          <Die4></Die4>
        </div>
        <button>Restart &#9865;</button>
      </div>
    </main>
  );
}

export default Gameboard;
