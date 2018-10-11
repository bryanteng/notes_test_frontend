import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state={
    input: '',
    selectedInput: ''
  }

  handleInputChange = (event) => {
    this.setState({input: event.target.value})

  }
  handleOnClick = (event) =>{
    // event.target.classList.add("comic");
  }

  logHighlighted = (event) =>{
    console.log(window.getSelection());
    console.log(window.getSelection().toString());
    this.setState({selectedInput: window.getSelection().toString()})
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.logHighlighted}>click me</button>
          <form>
            <input type="text" onChange={this.handleInputChange}  />
          </form>
          <input type="text" onClick={this.handleOnClick} value={this.state.input} />
        </header>
      </div>
    );
  }
}

export default App;
