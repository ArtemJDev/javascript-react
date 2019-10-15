import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './nav/Nav'
import Footer from './footer/Footer'

class App extends React.Component {
  render() {
    let a = 'My new site';
    let nav = this.props.nav;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{this.props.title}</h1>
        <h2>{this.props.hero}</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Nav nav={nav}/>
      <Footer cont={this.props.cont} adress={this.props.adr} title = {this.props.titleFooter}/>
    </div>
  );
}
}

export default App;
