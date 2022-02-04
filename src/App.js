import "./App.css";
import React from "react";
import Header from "./Header";
import Gameboard from "./Gameboard";
import { nanoid } from "nanoid";

function App() {
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
    setTenzies(
      dice.every((die) => die.isHeld == true) &&
        dice.every((die) => die.value === dice[0].value)
    );
  }, [dice]);

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

  function restartGame() {
    setTenzies(false);
    setDice(allNewDice());
  }

  return (
    <div className="App">
      <Header></Header>
      <Gameboard
        dice={dice}
        holdDice={holdDice}
        newDice={newDice}
        restartGame={restartGame}
        tenzies={tenzies}
      ></Gameboard>
    </div>
  );
}

export default App;
