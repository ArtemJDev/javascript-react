import React from "react";
// import logo from './logo.svg';
import "./App.css";
import App2 from "./App2/App2"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s1: "",
      s2: "",
      s3: "",
    };
  }

  //запускается после консутркции
  //позволяет пропс -> в стейт
  static getDerivedStateFromProps(props, state) {
    return { 
      s1: props.a1 ,
      s2: props.a2 ,
      s3: props.a1 * props.a2
    }
  }
  //after render
  // componentDidMount() {
  //   setTimeout(()=>{
  //     this.setState({text: 'Component did mount'})
  //   }, 3000);
  // }


  render() {
    return (
      <div>
        <App2 z1={this.state.s3}/>

        <p>{this.props.a1}</p>
        <p>{this.props.a2}</p>
        <br/>
        <p>{this.state.s1}</p>
        <p>{this.state.s2}</p>
        <br/>
        <p>{this.state.s3}</p>

      </div>
    );
  }
}

export default App;
