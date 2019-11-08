import React from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
      winnerX : 0,
      winnerO : 0
    }

    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  //новая игра
  newGame = () => {
    this.setState({ squares: Array(9).fill(null) });
    // выбрать сторону
    this.chooseSide();
  };

   //выбрать сторону
   chooseSide = () => {
    let x = prompt("Выбирите за кого играть, X(1) или O(0)", "");
    if(x === 1){
      this.setState({count : 0});
      //если была вызвана смена, без новой игры
      this.setState({ squares: Array(9).fill(null) });
    } else if(x === 0) {
      //если была вызвана смена, без новой игры
      this.setState({ squares: Array(9).fill(null) });
      this.setState({count : 1});
    }
  }

  isWinner = () => {
    let s = this.state.count % 2 === 0 ? "X" : "O";
    for (let i = 0; i < 8; i++) {
      let line = this.winnerLine[i];
      if (
        this.state.squares[line[0]] === s &&
        this.state.squares[line[1]] === s &&
        this.state.squares[line[2]] === s
      ) {
        alert(s + " WIN");
        //вывод таблицы побед
        if(s === 'X') {
          this.setState({winnerX : this.state.winnerX + 1});
        } else if(s === 'O') {
          this.setState({winnerO : this.state.winnerO + 1});
        }
        setTimeout(this.newGame, 1500);
      }
    }
  };

  //ничья
  isDraw = () => {
    if(this.state.count === 9) {
      alert("Ничья");
      setTimeout(this.newGame, 1500);
    }
  }

  clickHandler = event => {
    //номер квадрата по которому кликнули
    let data = event.target.getAttribute("data");
    let currentSquares = this.state.squares;
    if (currentSquares[data] === null) {
      currentSquares[data] = this.state.count % 2 === 0 ? "X" : "O";
      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: currentSquares });
    } else {
      alert("Так нельзя!");
    }
    this.isWinner();
    this.isDraw();
  };

 


    render() {
    return (
      <div className="tic-tac-toe">
        {/* таблица побед */}
        <div className="win">
        <p>Побед крестиков : {this.state.winnerX}</p>
        <p>Побед ноликов : {this.state.winnerO}</p>
        </div>
        

        <div className="ttt-grid" onClick={this.clickHandler} data="0">
          {this.state.squares[0]}
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="1">
          {this.state.squares[1]}
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="2">
          {this.state.squares[2]}
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="3">
          {this.state.squares[3]}
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="4">
          {this.state.squares[4]}
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="5">
          {this.state.squares[5]}
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="6">
          {this.state.squares[6]}
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="7">
          {this.state.squares[7]}
        </div>
        <div className="ttt-grid" onClick={this.clickHandler} data="8">
          {this.state.squares[8]}
        </div>
        
        <button onClick={this.chooseSide}>Выбрать сторону</button>
        {/* новая игра */}
        <button onClick={this.newGame}>Новая игра</button>
      </div>
    );
  }
}

export default App;
