import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});
afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and a button", () => {
  //Check if CommentBox component has a textarea and a button
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("has a textarea that users can type in", () => {
  // Simulate textarea change event
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });
  // Force update react component
  wrapped.update();
  // Check if textarea has correct value prop
  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});
