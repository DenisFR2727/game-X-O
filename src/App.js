import React from 'react';
import './App.css';
class App extends React.Component{
  constructor(props){
    super(props)
      this.state ={
        squares: Array(9).fill(null),
        count: 0,
        winX: 0,
        winO: 0,
        winner:false,
        SelectO:false,

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
      ]
      this.clickHandler = this.clickHandler.bind(this)
      this.reset = this.reset.bind(this)
  }
  isWinner =() =>{
     let s = (this.state.count % 2 === 0 ? "X" : "O")
     for(let i = 0; i<8; i++){
        let line = this.winnerLine[i]
        if(this.state.squares[line[0]] === s && this.state.squares[line[1]] === s && this.state.squares[line[2]] === s){
             alert(s + "win");
             setTimeout( ()=>{
                 this.setState({squares: Array(9).fill(null)})
                 this.setState({count: 0})
             },2000)
            if(s === 'X'){
                this.setState({winX: this.state.winX + 1})
            }
            if(s === 'O'){
                this.setState({winO: this.state.winO + 1})
            }
            if(this.state.winX === 2){
              alert("Winner WinX")
              
              this.reset();
           }
            if(this.state.winO === 2){
              alert("Winner WinO")
              
              this.reset();
           }
        }
        
     }
    
  }
  /// кнопка обнуления 
  reset = ()=>{
        setTimeout(()=>{
              this.setState({squares:Array(9).fill(null)})
              this.setState({count: 0}) 
        },1000)
        this.setState({winO: 0});
        this.setState({winX: 0});
  }
  /// выбор X или O 
  clickSelectX = () => {
    if(this.state.count === 0 && this.state.winner === false){
      this.setState({count: 0});
   } 
  }
  
  clickSelectO = () => {
    if(this.state.count === 0 && this.state.winner === false){
      this.setState({count: 1});
      this.setState({selectO: true});
      
    }
  }
  noWinnerPlayers(){
      if(this.state.count === 8 && !this.isWinner()){
           alert('Ничья')
           this.reset();
      } 
  }
  clickHandler = event => {
    // data - номер квадрата по которому кликнули
      let data = event.target.getAttribute('data')
      let currentSquares = this.state.squares;
      if(currentSquares[data] === null){
        currentSquares[data] = (this.state.count % 2 ===0 ? "X" : "O")
        this.setState({count: this.state.count + 1})
        this.setState({squares:currentSquares})
      }
      else{
        alert("Так нельзя!")
      }
     this.isWinner();
     this.noWinnerPlayers();
  }
  render(){
    return (
      <div className="tic-tac-toe">
            <div className='ttt-grid' onClick={this.clickHandler} data="0">{this.state.squares[0]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} data="1">{this.state.squares[1]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} data="2">{this.state.squares[2]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} data="3">{this.state.squares[3]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} data="4">{this.state.squares[4]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} data="5">{this.state.squares[5]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} data="6">{this.state.squares[6]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} data="7">{this.state.squares[7]}</div>
            <div className='ttt-grid' onClick={this.clickHandler} data="8">{this.state.squares[8]}</div>
            <button onClick={this.reset}>New Game</button>
            <div>X: {this.state.winX}</div><div>O: {this.state.winO}</div>
            <button onClick={this.clickSelectX}>X</button>
            <button onClick={this.clickSelectO}>O</button>
      </div>
      
    );
  }

}

export default App;
