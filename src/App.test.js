import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";

it("shows a comment box", () => {
  // Shallow renders only the given component
  // and none of its React Children. DOM elements are rendered (<h1>, <p>, etc)
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentList).length).toEqual(1);
});
