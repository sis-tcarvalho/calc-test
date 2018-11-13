import React, { Component } from 'react';
import './App.css';
import Button from './Button'
import Buttons from './Buttons'
import Display from './Display'
import math from 'mathjs'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Operation: []
    }
  }
  
  CalcOperations = () => {
    var result = this.state.Operation.join('')
    if(result) {
      result = math.eval(result)
      result = math.format(result, {precision: 10})
      this.setState({
        Operation: [result],
      })
    }
  }


  render() {
    return (
      <div className="App">
        <Display data={this.state.Operation}/>
        <header className="App-header">
          
          Calculator React.js
          <br></br>
          ainda em testes...
          
        </header>
      </div>
    );
  }
}

export default App;
