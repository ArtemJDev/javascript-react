import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      number: '',
      range: '',
      textarea: '',
      select: '',
      }
    }
    //for text, number, range
    myInput = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    //for textarea and select
    myChange = (event) => {
      this.setState({[event.target.name] : event.target.value})
    }
    submitForm = (e) => {
      e.preventDefault();
    }
    
  render() {
    
  return (
    <div>
      <form onSubmit={this.submitForm}>
        <input type="text" name="text" onInput = {this.myInput}/><br/>

        <input type="number" name="number" onInput = {this.myInput}/><br/>

        <input type="range" name="range" onInput = {this.myInput}/> <br/>

        <textarea name="textarea"  cols="30" rows="10" onChange = {this.myChange} /><br/>

        <select name="select" onChange = {this.myChange}>
              <option>Пункт 1</option>
             <option>Пункт 2</option>
        </select><br/>

        <input type="submit"/>
      </form>
      
      <table>
        <tbody>
        <tr>
          <th>Text</th>
          <td>{this.state.text}</td>
        </tr>
        <tr>
          <th>Number</th>
          <td>{this.state.number}</td>
        </tr>
        <tr>
          <th>Range</th>
          <td>{this.state.range}</td>
        </tr>
        <tr>
          <th>Textarea</th>
          <td>{this.state.textarea}</td>
        </tr>
        <tr>
          <th>Select</th>
          <td>{this.state.select}</td>
        </tr>
        </tbody>
      </table>
    </div>
    );
  }
}



export default App;
