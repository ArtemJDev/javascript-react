import React from 'react';
import logo from './heart.png';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
      text2: '',
      count : 0,
      errorMsg: '',
      checkBox : "false",
      divWidth: 100,
      range: 0,
      image: "block",
    }
    this.showText = this.showText.bind(this);
    this.showText2 = this.showText2.bind(this);
    this.countUp = this.countUp.bind(this);
    this.countReset = this.countReset.bind(this);
    this.atr = this.atr.bind(this);
    this.checkBox = this.checkBox.bind(this);
    this.radio = this.radio.bind(this);
    this.increase = this.increase.bind(this);
    this.range = this.range.bind(this);
    this.hide = this.hide.bind(this);
  }
  //способ передачи this через  => или биндинг выше
  //показать текст при клике
  showText() {
    // this.setState({text : 'h1'});
    console.log("button work");
    this.setState({text : "button work"});
  }

  // проверка на ввод менее 6 символов
  showText2(e) {
    if(e.target.value.length < 6) {
      this.setState({errorMsg : "Предупреждение, текст должен быть больше 6 символов!!!"});
    } else {
      this.setState({errorMsg : ''});
      this.setState({text2 : e.target.value});
    }
  }

  // наведение на div
  move() {
    console.log("move");
  }

// подсчет
  countUp() {
    this.setState({count : this.state.count + 1});
  }
  countReset() {
    this.setState({count : 0});
  }

  // вывод аттрибутов
  atr(e) {
    console.log(e.target.getAttribute("data"));
  }

  // проверка чекбокса
  checkBox(e) {
    if(this.state.checkBox === 'false') {
      this.setState({checkBox : "true"});
      console.log("checkbox checked");
    } else {
      this.setState({checkBox : 'false'});
      console.log("checkbox unchecked");
    }
  }

  // проверка радио
  radio(e) {
    console.log(e.target.getAttribute("value"));
  }

  // увеличиваем div
  increase() {
      this.setState({divWidth : this.state.divWidth + 3})
      console.log(this.state.divWidth);
  }

  // ползунок
  range(e) {
    this.setState({range:e.target.value});
  }

  // изображение
  hide(){
    if(this.state.image === 'block') {
      this.setState({image:"none"});
    } else {
      this.setState({image:"block"});
    }
  }

 render() {
   return (
      <div>
        {/* текст по клику */}
        <button onClick = {this.showText}>Push 1</button><br/>
        <p>{this.state.text}</p>

        {/* Увеличение count */}
        <button onClick = {this.countUp}>Count</button>
        <button onClick = {this.countReset}>Reset</button>
        <p >{this.state.count}</p>

        {/* наведение на div */}
        <div onMouseMove={this.move} className="green"></div>

        {/*  вывести дату*/}
        <button onClick = {this.atr} data="atr-1">atr1</button>
        <button onClick = {this.atr} data="atr-2">atr2</button><br/>

        {/* инпут в параграф */}
        <input type="text"   onInput={this.showText2}/> <br/>
        {/* текст с инпута + проверка - предупреждение */}
        <p>{this.state.text2}<span className="error">{this.state.errorMsg}</span></p> 

        {/* чекбокс */}
        <input onClick={this.checkBox} type="checkbox"/><br/>

        {/* радиобатон */}
        <input onChange={this.radio} type="radio" name='radio1' value="radio1"/>
        <label  htmlFor="radio1">123</label>
        <input onChange={this.radio} type="radio" value="radio2"/>
        <label htmlFor="radio1">123</label>
        <input onChange={this.radio} type="radio" value="radio3"/>
        <label htmlFor="radio1">123</label><br/>

        {/* увеличиваем div при нажатии */}
        <button onClick={this.increase}>Увеличиваем div</button>
        <div className="green" id="increase" style={{width:this.state.divWidth + "px"}}></div><br/>
        

        {/* ползунок */}
        <input onInput={this.range} type="range" min="0" max="50" step="1" name="range"/>
        <label htmlFor="range">{this.state.range}</label><br/>

        {/* изображение */}
        <button onClick={this.hide}>Image</button>
        <img src={logo} style={{display:this.state.image}} alt="Heart"/>

      </div>
   );
 }
}

export default App;