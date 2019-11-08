import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        text: '',
        first_name: '',
        age: 0,

      }
    }
    myInput = (e) => {
      console.log(e.target.name);

      this.setState({[e.target.name]: e.target.value});
    }
    submitForm = (e) => {
      e.preventDefault();

    }
  render() {
    let a = '';
    if(this.state.text) {
      a =  <p>Your enetered text: {this.state.text} </p>;
    } else {
      a = '';
    }
  return (
    <div>
      <form  onSubmit={this.submitForm}>
        <input onChange={this.myInput} type="text" name="text"/>
        <input onChange={this.myInput} type="number" name="age"/>
        {a}
        <input  type="submit"/>
        <p>Age: {this.state.age}</p>
      </form>
    </div>
    
    );
  }
}



export default App;
