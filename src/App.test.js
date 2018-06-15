import React from "react";
import { shallow } from "enzyme";
import App from "App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;
beforeEach(() => {
  // Shallow renders only the given component
  // and none of its React Children. DOM elements are rendered (<h1>, <p>, etc)
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
