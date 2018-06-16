import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  state = {};

  render() {
    return (
      <ul>
        {this.props.comments.map(comment => <li key={comment}>{comment}</li>)}
      </ul>
    );
  }
}

const mapStatetoProps = state => ({
  comments: state.comments
});

export default connect(mapStatetoProps)(CommentList);
