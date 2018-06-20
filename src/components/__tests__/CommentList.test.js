import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import WithProvider from "redux/index";

let wrapped;
beforeEach(() => {
  const initReduxState = { comments: ["comment 1", "comment 2"] };
  // mount => Full DOM rendering
  wrapped = mount(
    <WithProvider initState={initReduxState}>
      <CommentList />
    </WithProvider>
  );
});
afterEach(() => {
  wrapped.unmount();
});

/* ===========================General tests =========================== */
it("created one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows the text for each comment", () => {
  // wrapped.render() return CheerioWrapper.
  // .text() returns all text inside CheerioWrapper
  expect(wrapped.render().text()).toContain("comment 1");
  expect(wrapped.render().text()).toContain("comment 2");
});
