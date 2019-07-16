import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { guessWord } from "../store/actions";

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    this.inputBox = createRef();
  }

  submitGuessWord = (e) => {
    e.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if (guessedWord && guessedWord.length)
      this.props.guessWord(guessedWord);
  }

  render() {
    const { success } = this.props;
    return (
      <div data-test="component-input">
        {success ? "" : (
          <form>
            <input
              ref={this.inputBox}
              data-test="input-box"
              id="word-guess"
              type="text"
              placeholder="Enter word to guess"
            />
            <button
              data-test="submit-button"
              type="submit"
              onClick={this.submitGuessWord}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  success: state.success
});

const mapDispatchToProps = dispatch => ({
  guessWord: bindActionCreators(guessWord, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedInput);
