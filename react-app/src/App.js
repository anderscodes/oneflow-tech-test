import React, { Component } from 'react';
import Episodes from './episodes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to a list of Silicon Valley episodes!</h1>
        </header>
        <Episodes />
      </div>
    );
  }
}

export default App;
