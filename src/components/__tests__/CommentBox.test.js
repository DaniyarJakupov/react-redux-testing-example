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

/* ===========================General tests =========================== */
it("has a textarea and a button", () => {
  //Check if CommentBox component has a textarea and a button
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

/* ====================== TextArea tests =============================== */
describe("textarea tests", () => {
  beforeEach(() => {
    // Simulate change event for textarea
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    // Force update react component
    wrapped.update();
  });

  it("has a textarea that users can type in", () => {
    // Check if textarea has correct value prop
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("has a textarea that clears up after submission", () => {
    // Simulate submit event for HTML Form
    wrapped.find("form").simulate("submit");
    // Check if textarea has been cleared out
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
