import React from "react";
import { nanoid } from "nanoid";

function Die1(props) {
  return (
    <div
      className="die1"
      style={{ backgroundColor: `${props.isHeld ? "#E4B16E" : "#ffffff"}` }}
      onClick={props.clickHandler}
    >
      <span className="dot"></span>
    </div>
  );
}

function Die2(props) {
  return (
    <div
      className="die2"
      style={{ backgroundColor: `${props.isHeld ? "#E4B16E" : "#ffffff"}` }}
      onClick={props.clickHandler}
    >
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

function Die3(props) {
  return (
    <div
      className="die3"
      style={{ backgroundColor: `${props.isHeld ? "#E4B16E" : "#ffffff"}` }}
      onClick={props.clickHandler}
    >
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

function Die4(props) {
  return (
    <div
      className="die4"
      style={{ backgroundColor: `${props.isHeld ? "#E4B16E" : "#ffffff"}` }}
      onClick={props.clickHandler}
    >
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
}

function Die5(props) {
  return (
    <div
      className="die5"
      style={{ backgroundColor: `${props.isHeld ? "#E4B16E" : "#ffffff"}` }}
      onClick={props.clickHandler}
    >
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
}

function Die6(props) {
  return (
    <div
      className="die6"
      style={{ backgroundColor: `${props.isHeld ? "#E4B16E" : "#ffffff"}` }}
      onClick={props.clickHandler}
    >
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
