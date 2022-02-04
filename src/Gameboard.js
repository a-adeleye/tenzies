import React from "react";
import { nanoid } from "nanoid";
import {Die1, Die2, Die3, Die4, Die5, Die6} from "./Dice"

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
  function rollDice() {
    const randomNumber = Math.ceil(Math.random() * 6);
    return {
      value: randomNumber,
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(rollDice());
    }
    return diceArray;
  }

  const [dice, setDice] = React.useState(() => allNewDice());

  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    console.log(dice.every(die => die.value === dice[0].value))
  })

  function holdDice(id) {
    setDice(
      dice.map((prevDice) =>
        prevDice.id === id
          ? { ...prevDice, isHeld: !prevDice.isHeld }
          : prevDice
      )
    );
  }

  function newDice() {
    setDice(dice.map((die) => (die.isHeld ? die : rollDice())));
  }

  function renderDie(num) {
    let value = num.value;
    switch (value) {
      case 1:
        value = (
          <Die1
            key={num.id}
            isHeld={num.isHeld}
            clickHandler={(id) => holdDice(num.id)}
          />
        );
        break;
      case 2:
        value = (
          <Die2
            key={num.id}
            isHeld={num.isHeld}
            clickHandler={(id) => holdDice(num.id)}
          />
        );
        break;
      case 3:
        value = (
          <Die3
            key={num.id}
            isHeld={num.isHeld}
            clickHandler={(id) => holdDice(num.id)}
          />
        );
        break;
      case 4:
        value = (
          <Die4
            key={num.id}
            isHeld={num.isHeld}
            clickHandler={(id) => holdDice(num.id)}
          />
        );
        break;
      case 5:
        value = (
          <Die5
            key={num.id}
            isHeld={num.isHeld}
            clickHandler={(id) => holdDice(num.id)}
          />
        );
        break;
      case 6:
        value = (
          <Die6
            key={num.id}
            isHeld={num.isHeld}
            clickHandler={(id) => holdDice(num.id)}
          />
        );
        break;
    }

    return value;
  }

  const dieElements = (
    <div className="dice">{dice.map((die) => renderDie(die))}</div>
  );

  return (
    <main>
      <div className="box">
        <Instruction />
        {dieElements}
        <button onClick={newDice}>Restart &#9865;</button>
      </div>
    </main>
  );
}

export default Gameboard;
