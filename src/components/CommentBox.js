import React, { Component } from "react";

class CommentBox extends Component {
  state = {
    text: ""
  };

  onTextChange = ({ target: { value } }) => {
    this.setState({ text: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // TODO: call action creator to save comment

    // Clear state
    this.setState({ text: "" });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={this.state.text}
          onChange={this.onTextChange}
        />

        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
