import React, { Component } from 'react';
import './App.css';
import update from 'immutability-helper'
import Button from './Button'
import Buttons from './Buttons'
import Display from './Display'
import math from 'mathjs'
// mathjs has it's own eval function which only parses mathematical expressions (math.eval () - takes string and gives a number)


// Return a Buttons which holds all the buttons together
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
      result = math.format(result, {precision: 4})
      result = String(result)
      this.setState({
        Operation: [result],
      })
    }
  }

/**Having numeric numbers buttons 0-9 and operators +,-,*,/
 * need to have the button clear, clear and decimals.
 * Each button has a click handler */ 
  
handleClick = (event) => {
  const value = event.target.getAttribute('data-value')
    switch (value) {
      case 'clear':
       this.setState({
         Operation: [],
       })
       break
    case 'equal':
       this.CalcOperations()
       break
    default:
       const newOperations = update(this.state.Operation, {
         $push:[value],
       })
       this.setState({
         Operation: newOperations,
       })
       break
    }
    
}

// adding the buttons of the calculator 
  render() {
    return (
      <div className="App">
        <Display data={this.state.Operation}/>
        
          <Buttons>
          <Button onClick={this.handleClick}            label=""           value="null"/>
          <Button id="zero" onClick={this.handleClick}  label="0"          value="0"/>
          <Button id="seven" onClick={this.handleClick} label="7"          value="7"/>
          <Button id="four" onClick={this.handleClick}  label="4"          value="4"/>
          <Button id="one" onClick={this.handleClick}   label="1"          value="1"/>
          <Button onClick={this.handleClick}            label="C"          value="clear"/>
          <Button onClick={this.handleClick}            label="-"          value="-"/>
          <Button id="eight" onClick={this.handleClick} label="8"          value="8"/>
          <Button id="five" onClick={this.handleClick}  label="5"          value="5"/>
          <Button id="two" onClick={this.handleClick}   label="2"          value="2"/> 
          <Button onClick={this.handleClick}            label="/"          value="/"/>
          <Button onClick={this.handleClick}            label="x"          value="*"/>
          <Button id="nine" onClick={this.handleClick}  label="9"          value="9"/>
          <Button id="six" onClick={this.handleClick}   label="6"          value="6"/>
          <Button id="three" onClick={this.handleClick} label="3"          value="3"/>
          <Button onClick={this.handleClick}            label="+"     size="2"     value="+"/>
          <Button onClick={this.handleClick}            label="=" size="2" value="equal"/>
          <Button onClick={this.handleClick}            label="."          value="."/>
        </Buttons>
          

          
         
         
          
        
      </div>
    );
  }
}

export default App;

