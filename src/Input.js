import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          type="text"
          id="input-box"
          className="mb-2 mx-sm-3"
          placeholder="Enter guess"
        />
        <button
          id="submit-button"
          type="submit"
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    );
    return <div id="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
