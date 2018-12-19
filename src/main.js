import React, { Component } from 'react';
import LeftSide from './left';
import RightSide from './right';
import './App.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
      <LeftSide/>
      <RightSide/>
    </div>
    );
  }
}

export default Main;