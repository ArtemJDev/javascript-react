import React from "react";
// import logo from './logo.svg';
import "./App2.css";

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      y1 : '',
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      y1: props.z1*10
    }
  }

  render() {
    return (
      <div>
        <h1>App2 = {this.props.z1 }</h1>
        <h2>State from app2 = {this.state.y1}</h2>

      </div>
    );
  }
}

export default App2;
