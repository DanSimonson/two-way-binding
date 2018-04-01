import React, { Component } from 'react';
import './App.css';
//import Cars from './components/Cars';
class App extends Component {
  state = {name: 'Chevy'} 

  twoWayBindHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
      <input type="text" onChange={this.twoWayBindHandler} value={this.state.name}/>
      <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default App;
