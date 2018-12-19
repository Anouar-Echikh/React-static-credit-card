import React, { Component } from "react";
import img1 from "./images/puce.png";
import "./App.css";

class LeftSide extends Component {
  render() {
    return (
      <div className="left">
        <img className="puce" src={img1} alt="" />
        <p className="serie">7253 4587 9523 4521</p>
        <p className="month">MONTH/YEAR</p>
        <p className="numb">
          5422
          <span className="span">11/50</span>
        </p>
        <p className="numb"> CARDHOLDER</p>
      </div>
    );
  }
}

export default LeftSide;
