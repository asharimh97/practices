import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false
    }
  }

  handleIncrement = () => {
    const { error } = this.state;
    if (error)
      this.setState({ error: false });

    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  handleDecrement = () => {
    const { counter } = this.state;

    if (counter > 0)
      this.setState(prevState => ({ counter: prevState.counter - 1 }));
    else
      this.setState({ error: true });
  }

  render() {
    const { counter, error } = this.state;
    return (
      <div className="App" data-test="component-app">
      <h1 data-test="display-counter">Counter is currently {counter}</h1>
      {error &&
        <p style={{color: "red"}} data-test="error-message">Counter shouldn't below 0</p>
      }
      <button
        data-test="button-increment"
        onClick={this.handleIncrement}
      >
        Increment counter
      </button>
      <button
        data-test="button-decrement"
        onClick={this.handleDecrement}
      >
        Decrement counter
      </button>
      </div>
    );
  }
}

export default App;
