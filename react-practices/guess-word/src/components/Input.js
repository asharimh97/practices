import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Input extends Component {
  render() {
    return (
      <div>
        <button />
      </div>
    )
  }
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
