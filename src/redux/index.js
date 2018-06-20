import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "redux/reducers";

export default ({ children, initState = {} }) => {
  return (
    <Provider
      store={createStore(
        reducers,
        initState,
        composeWithDevTools(applyMiddleware())
      )}
    >
      {children}
    </Provider>
  );
};
