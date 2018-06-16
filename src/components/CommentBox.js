import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment } from "redux/actions";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  onTextChange = ({ target: { value } }) => {
    this.setState({ comment: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // TODO: call action creator to save comment
    this.props.saveComment(this.state.comment);
    // Clear state
    this.setState({ comment: "" });
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
          value={this.state.comment}
          onChange={this.onTextChange}
        />

        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { saveComment }
)(CommentBox);
