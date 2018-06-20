import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import WithProvider from "redux/index";
import App from "App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [
      { name: "Fetched 1" },
      { name: "Fetched 2" },
      { name: "Fetched 3" }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", done => {
  // Render the entire App
  const wrapped = mount(
    <WithProvider>
      <App />
    </WithProvider>
  );

  // Find 'Fetch Comments' button and click it
  wrapped.find(".fetch-btn").simulate("click");

  // Expect to find a list of comments
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(3);
    done();

    wrapped.unmount();
  });
});
