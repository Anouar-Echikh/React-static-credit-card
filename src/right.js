import React, { Component } from "react";
import visa from "./images/visa.png";
import "./App.css";

class RightSide extends Component {
  render() {
    return (
      <div className="right">
        <img className="visa" src={visa} alt="" />
      </div>
    );
  }
}

export default RightSide;
