import React from "react";
import { Die1, Die2, Die3, Die4, Die5, Die6 } from "./Dice";
import Tenzies from "./Tenzies";
import Confetti from "react-confetti";

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

function Gameboard(props) {



  function renderDie(num) {
    let value = num.value;
    switch (value) {
      case 1:
        value = (
          <Die1
            key={num.id}
            isHeld={num.isHeld}
            clickHandler={(id) => props.holdDice(num.id)}
          />
        );
        break;
      case 2:
        value = (
          <Die2
            key={num.id}
            isHeld={num.isHeld}
            clickHandler={(id) => props.holdDice(num.id)}
          />
        );
        break;
      case 3:
        value = (
          <Die3
            key={num.id}
            isHeld={num.isHeld}
            clickHandler={(id) => props.holdDice(num.id)}
          />
        );
        break;
      case 4:
        value = (
          <Die4
            key={num.id}
            isHeld={num.isHeld}
            clickHandler={(id) => props.holdDice(num.id)}
          />
        );
        break;
      case 5:
        value = (
          <Die5
            key={num.id}
            isHeld={num.isHeld}
            clickHandler={(id) => props.holdDice(num.id)}
          />
        );
        break;
      case 6:
        value = (
          <Die6
            key={num.id}
            isHeld={num.isHeld}
            clickHandler={(id) => props.holdDice(num.id)}
          />
        );
        break;
    }

    return value;
  }

  const dieElements = (
    <div className="dice">{props.dice.map((die) => renderDie(die))}</div>
  );

  return (
    <main>
      <div className="box">
        {props.tenzies && <Confetti />}
        <Instruction />
        {dieElements}
        <button onClick={props.newDice}>Roll &#9865;</button>
      </div>
      <Tenzies restart={props.restartGame} tenzies={props.tenzies} />
    </main>
  );
}

export default Gameboard;
