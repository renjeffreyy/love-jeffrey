
import './App.css';
import React, { Component } from 'react'


class App extends Component {

  constructor(){
    super();

    this.state = {
      buttonText : 'hello',
      array:[1,2,3,4]
    }
  }
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <button onClick={ ()=> this.setState({ buttonText : 'goodbye' })}>{this.state.buttonText}
        </button>
        <p>{this.state.array.map( item => item)}</p>
      </header>
    </div>
    )

  }

  
}

export default App;
