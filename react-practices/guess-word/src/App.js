import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import './App.css';

import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";
import Input from "./components/Input";

import { getSecretWord } from "./store/actions";

export class UnconnectedApp extends Component {

  componentDidMount() {
    this.props.getSecretWord();
  };

  render() {
    const { success } = this.props;
    return (
      <div className="App">
      <div>The secret word is: {this.props.secretWord}</div>
      <Congrats success={success} />
      <Input />
      <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  success: state.success,
  guessedWords: state.guessedWords,
  secretWord: state.secretWord
});

const mapDispatchToProps = dispatch => ({
  getSecretWord: bindActionCreators(getSecretWord, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedApp);
