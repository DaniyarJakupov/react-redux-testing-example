import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import WithProvider from "redux/index";

ReactDOM.render(
  <WithProvider>
    <App />
  </WithProvider>,
  document.querySelector("#root")
);
