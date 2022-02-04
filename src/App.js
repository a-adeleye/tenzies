import "./App.css";
import React from "react";
import Header from "./Header";
import Gameboard from "./Gameboard";
import { nanoid } from "nanoid";

function App() {
  function retrieveDataFromStorage() {
    let data = [];
    if (!localStorage.getItem("gameData")) {
      updateDataToStorage();
    } else {
      data = JSON.parse(localStorage.getItem("gameData"));
    }
    return data;
  }

  function updateDataToStorage() {
    localStorage.setItem("gameData", JSON.stringify(rolls));
  }

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
  const [rollCount, setRollCount] = React.useState(0);
  const [rolls, setRolls] = React.useState(retrieveDataFromStorage());

  retrieveDataFromStorage();

  React.useEffect(() => {
    setTenzies(
      dice.every((die) => die.isHeld === true) &&
        dice.every((die) => die.value === dice[0].value)
    );
  }, [dice]);

  React.useEffect(() => {
    if (tenzies) {
      setRolls((prevRolls) => [...prevRolls, rollCount]);
    }
  }, [tenzies]);

  function holdDice(id) {
    setDice(
      dice.map((prevDice) =>
        prevDice.id === id
          ? { ...prevDice, isHeld: !prevDice.isHeld }
          : prevDice
      )
    );
  }

  const bestRoll = rolls.length < 1 ? "" : Math.min(...rolls);
  const highestRoll = rolls.length < 1 ? "" : Math.max(...rolls);
  const gamesPlayed = rolls.length;

  function newDice() {
    setDice(dice.map((die) => (die.isHeld ? die : rollDice())));
    setRollCount((prevCount) => prevCount + 1);
  }

  async function restartGame() {
    Promise.resolve(setTenzies(false))
      .then(setDice(allNewDice()))
      .then(setRollCount(0))
      .then(updateDataToStorage());
  }

  return (
    <div className="App">
      <Header
        leastRoll={bestRoll}
        highestRoll={highestRoll}
        count={gamesPlayed}
      />
      <Gameboard
        dice={dice}
        holdDice={holdDice}
        newDice={newDice}
        restartGame={restartGame}
        tenzies={tenzies}
      />
    </div>
  );
}

export default App;
