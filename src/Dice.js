import React from "react"

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

  export {Die1, Die2, Die3, Die4, Die5, Die6}