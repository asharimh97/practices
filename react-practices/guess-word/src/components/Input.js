import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { guessWord } from "../store/actions";

class Input extends Component {
  render() {
    const { success } = this.props;
    return (
      <div data-test="component-input">
        {success ? "" : (
          <form>
            <input
              data-test="input-box"
              id="word-guess"
              type="text"
              placeholder="Enter word to guess"
            />
            <button
              data-test="submit-button"
              type="submit"
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
)(Input);
